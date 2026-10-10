#!/usr/bin/env node
// Consistency checks for the gate data. Run with `npm run check`.
//
//  1. every `matrix` is unitary at its defaults and at random parameter values
//  2. every Quirk circuit reproduces the matrix along the path the link animates
//  3. every Weyl coordinate formula matches the matrix (Makhlin's local invariants)
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const GateMath = require("../js/gate-math.js");
const Weyl = require("../js/weyl.js");
const Quirk = require("../lib/quirk-sim.js");
const { C, add, sub, mul, div, exp } = GateMath.complex;

const root = path.join(__dirname, "..");
const zeros = (n) => Array.from({ length: n }, () => Array.from({ length: n }, () => C(0)));
const identity = (n) => { const m = zeros(n); for (let i = 0; i < n; i++) m[i][i] = C(1); return m; };
const matmul = (a, b) => a.map((row, i) => row.map((_, j) => row.reduce((acc, _x, k) => add(acc, mul(a[i][k], b[k][j])), C(0))));
const adjoint = (a) => a[0].map((_, j) => a.map((row) => [row[j][0], -row[j][1]]));
const transpose = (a) => a[0].map((_, j) => a.map((row) => row[j]));
const trace = (a) => a.reduce((acc, row, i) => add(acc, row[i]), C(0));
const maxDiff = (a, b) => Math.max(...a.flatMap((row, i) => row.map((z, j) => Math.hypot(z[0] - b[i][j][0], z[1] - b[i][j][1]))));
function det(m) {
  if (m.length === 1) return m[0][0];
  let d = C(0);
  for (let j = 0; j < m.length; j++) {
    const minor = m.slice(1).map((row) => row.filter((_, k) => k !== j));
    const term = mul(m[0][j], det(minor));
    d = j % 2 ? sub(d, term) : add(d, term);
  }
  return d;
}
const num = (v) => (typeof v === "number" ? v : GateMath.evaluate(String(v))[0]);

// Makhlin invariants (G1 complex, G2 real) of a 4x4 unitary
const s2 = Math.SQRT1_2;
const Q = [[C(s2), C(0), C(0), C(0, s2)], [C(0), C(0, s2), C(s2), C(0)], [C(0), C(0, s2), C(-s2), C(0)], [C(s2), C(0), C(0), C(0, -s2)]];
function makhlin(U) {
  const d = det(U);
  const r = Math.pow(Math.hypot(d[0], d[1]), 0.25), th = Math.atan2(d[1], d[0]) / 4;
  const Un = U.map((row) => row.map((z) => div(z, [r * Math.cos(th), r * Math.sin(th)])));
  const m = matmul(matmul(adjoint(Q), Un), Q);
  const M = matmul(transpose(m), m);
  const t = trace(M), t2 = mul(t, t);
  return { g1: div(t2, C(16)), g2: div(sub(t2, trace(matmul(M, M))), C(4)) };
}
// CAN(a, b, c) = exp(i(a XX + b YY + c ZZ)) with a, b, c in units of π
const X = [[C(0), C(1)], [C(1), C(0)]], Y = [[C(0), C(0, -1)], [C(0, 1), C(0)]], Z = [[C(1), C(0)], [C(0), C(-1)]];
const kron2 = (a, b) => { const m = zeros(4); for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) for (let k = 0; k < 2; k++) for (let l = 0; l < 2; l++) m[i * 2 + k][j * 2 + l] = mul(a[i][j], b[k][l]); return m; };
const expPauli = (P, aPi) => { const PP = kron2(P, P); return identity(4).map((row, i) => row.map((z, j) => add(mul(z, C(Math.cos(Math.PI * aPi))), mul(PP[i][j], C(0, Math.sin(Math.PI * aPi)))))); };
const can = (a, b, c) => matmul(matmul(expPauli(X, a), expPauli(Y, b)), expPauli(Z, c));

let failures = 0, checks = 0;
const fail = (slug, what) => { failures++; console.log(`  FAIL ${slug}: ${what}`); };
const rng = (() => { let s = 12345; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();

for (const file of fs.readdirSync(path.join(root, "gates")).sort()) {
  const slug = file.replace(/\.md$/, "");
  const data = matter(fs.readFileSync(path.join(root, "gates", file), "utf8")).data;
  if (!data.matrix) continue;
  const params = Object.entries(data.params || {}).map(([key, p]) => ({ key, def: num(p.default), min: num((p.range || [0, 2])[0]), max: num((p.range || [0, 2])[1]) }));
  const defaults = Object.fromEntries(params.map((p) => [p.key, p.def]));
  const randomPoint = () => Object.fromEntries(params.map((p) => [p.key, p.min + rng() * (p.max - p.min)]));
  let matrixAt;
  try { matrixAt = GateMath.compileMatrix(data.matrix); } catch (e) { fail(slug, "matrix does not parse: " + e.message); continue; }

  // 1. unitarity
  for (const values of [defaults, randomPoint(), randomPoint()]) {
    checks++;
    const U = matrixAt(values);
    if (U.some((row) => row.length !== U.length)) { fail(slug, "matrix is not square"); break; }
    const err = maxDiff(matmul(adjoint(U), U), identity(U.length));
    if (!(err < 1e-9)) { fail(slug, `not unitary (error ${err.toExponential(2)})`); break; }
  }

  // 2. Quirk circuit vs matrix along the spin path
  if (data.quirk) {
    const spin = data.quirk.spin || {};
    for (const t of [0, 0.13, 0.5, 0.77]) {
      checks++;
      const values = Object.fromEntries(params.map((p) => [p.key, spin[p.key] != null ? spin[p.key] * t : p.def]));
      let err;
      try { err = maxDiff(Quirk.simulate(data.quirk, values), matrixAt(values)); } catch (e) { fail(slug, "Quirk circuit: " + e.message); break; }
      if (!(err < 1e-9)) { fail(slug, `Quirk circuit differs from the matrix at t=${t} (error ${err.toExponential(2)})`); break; }
      if (!Object.keys(spin).length) break;
    }
  }

  // 3. Weyl coordinates vs matrix
  if (data.weyl && data.arity === 2 && (!data.dimension || data.dimension === 2)) {
    const w = Array.isArray(data.weyl) ? { coords: data.weyl } : data.weyl;
    const coordFns = (w.coords || []).map(Weyl.compileCoord);
    const wparams = Object.keys(w.params || {});
    for (const values of [defaults, randomPoint(), randomPoint()]) {
      checks++;
      const wvals = Object.fromEntries(wparams.map((k) => [k, values[k] != null ? values[k] : Weyl.num((w.params[k] || {}).default)]));
      const point = Weyl.canonical(coordFns.map((f) => f(wvals)));
      const a = makhlin(matrixAt(values)), b = makhlin(can(...point));
      const err = Math.hypot(a.g1[0] - b.g1[0], a.g1[1] - b.g1[1]) + Math.abs(a.g2[0] - b.g2[0]);
      if (!(err < 1e-7)) { fail(slug, `Weyl coordinates disagree with the matrix (invariant error ${err.toExponential(2)})`); break; }
      if (!wparams.length) break;
    }
  }
}
console.log(`${checks} checks, ${failures} failures`);
process.exit(failures ? 1 : 0);
