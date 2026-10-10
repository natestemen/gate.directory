// Simulates a gate's Quirk circuit (front matter `quirk`) so the build can check it
// against the gate's matrix. Node only; the pages never load this.
const GateMath = require("../js/gate-math.js");
const { C, add, mul, exp } = GateMath.complex;
const PI = Math.PI;

const zeros = (n) => Array.from({ length: n }, () => Array.from({ length: n }, () => C(0)));
const identity = (n) => { const m = zeros(n); for (let i = 0; i < n; i++) m[i][i] = C(1); return m; };
function matmul(a, b) {
  const n = a.length, m = zeros(n);
  for (let i = 0; i < n; i++) for (let k = 0; k < n; k++) {
    const aik = a[i][k];
    if (aik[0] === 0 && aik[1] === 0) continue;
    for (let j = 0; j < n; j++) m[i][j] = add(m[i][j], mul(aik, b[k][j]));
  }
  return m;
}
function kron(a, b) {
  const na = a.length, nb = b.length, m = zeros(na * nb);
  for (let i = 0; i < na; i++) for (let j = 0; j < na; j++) for (let k = 0; k < nb; k++) for (let l = 0; l < nb; l++) m[i * nb + k][j * nb + l] = mul(a[i][j], b[k][l]);
  return m;
}
const scale = (m, z) => m.map((row) => row.map((x) => mul(x, z)));

function parseComplex(s) {
  const terms = s.replace(/\s+/g, "").match(/[+-]?[^+-]+/g) || ["0"];
  let re = 0, im = 0;
  for (let term of terms) {
    let sign = 1;
    if (term[0] === "-") { sign = -1; term = term.slice(1); } else if (term[0] === "+") term = term.slice(1);
    const imag = term.endsWith("i");
    if (imag) term = term.slice(0, -1);
    const v = term === "" ? 1 : term.startsWith("√") ? Math.sqrt(term.slice(1) === "½" ? 0.5 : parseFloat(term.slice(1))) : term === "½" ? 0.5 : parseFloat(term);
    if (imag) im += sign * v; else re += sign * v;
  }
  return C(re, im);
}
const parseQuirkMatrix = (text) => text.trim().replace(/^\{\{/, "").replace(/\}\}$/, "").split(/\}\s*,\s*\{/).map((r) => r.split(",").map(parseComplex));
function bitReverse(m) { // Quirk is little-endian, the pages big-endian
  const n = m.length, bits = Math.round(Math.log2(n));
  const rev = (i) => parseInt(i.toString(2).padStart(bits, "0").split("").reverse().join(""), 2);
  return m.map((_, i) => m[rev(i)].map((__, j) => m[rev(i)][rev(j)]));
}

const s2 = Math.SQRT1_2;
const X = [[C(0), C(1)], [C(1), C(0)]], Y = [[C(0), C(0, -1)], [C(0, 1), C(0)]], Z = [[C(1), C(0)], [C(0), C(-1)]];
const H = [[C(s2), C(s2)], [C(s2), C(-s2)]];
const cexp = (a) => exp(C(0, a));
const zpow = (p) => [[C(1), C(0)], [C(0), cexp(PI * p)]];
const xpow = (p) => matmul(matmul(H, zpow(p)), H);
const rx = (a) => [[C(Math.cos(a / 2)), C(0, -Math.sin(a / 2))], [C(0, -Math.sin(a / 2)), C(Math.cos(a / 2))]];
const ry = (a) => [[C(Math.cos(a / 2)), C(-Math.sin(a / 2))], [C(Math.sin(a / 2)), C(Math.cos(a / 2))]];
const rz = (a) => [[cexp(-a / 2), C(0)], [C(0), cexp(a / 2)]];
function qft(qubits) { const N = 2 ** qubits, m = zeros(N); for (let j = 0; j < N; j++) for (let k = 0; k < N; k++) m[j][k] = mul(cexp((2 * PI * j * k) / N), C(1 / Math.sqrt(N))); return m; }
const FIXED = { X, Y, Z, H, "Z^½": zpow(0.5), "Z^-½": zpow(-0.5), "Z^¼": zpow(0.25), "Z^-¼": zpow(-0.25), "X^½": xpow(0.5), "X^-½": xpow(-0.5) };

function cellMatrix(cell, values, customs) {
  if (typeof cell === "object") {
    const exponent = /\^ft$/.test(cell.id);
    const a = cell.param ? (cell.mul == null ? 1 : cell.mul) * values[cell.param] * (exponent ? 1 : PI) : GateMath.evaluate(cell.arg)[0];
    return { Rxft: rx, Ryft: ry, Rzft: rz, "Z^ft": zpow, "X^ft": xpow }[cell.id](a);
  }
  if (FIXED[cell]) return FIXED[cell];
  const q = /^QFT(\d+)$/.exec(cell);
  if (q) return qft(+q[1]);
  if (customs[cell]) return customs[cell];
  throw new Error("unsupported Quirk gate " + cell);
}
const width = (m) => Math.round(Math.log2(m.length));
function embed(g, wire, n) { let m = g; if (wire > 0) m = kron(identity(2 ** wire), m); if (n - wire - width(g) > 0) m = kron(m, identity(2 ** (n - wire - width(g)))); return m; }

function columnUnitary(n, col, values, customs) {
  const N = 2 ** n; let U = identity(N); const controls = [], swaps = [];
  col.forEach((cell, wire) => {
    if (cell === 1 || cell === undefined) return;
    if (cell === "•") { controls.push(wire); return; }
    if (cell === "Swap") { swaps.push(wire); return; }
    U = matmul(embed(cellMatrix(cell, values, customs), wire, n), U);
  });
  if (swaps.length === 2) {
    const [a, b] = swaps, P = zeros(N);
    for (let i = 0; i < N; i++) { const bits = i.toString(2).padStart(n, "0").split(""); [bits[a], bits[b]] = [bits[b], bits[a]]; P[parseInt(bits.join(""), 2)][i] = C(1); }
    U = matmul(P, U);
  }
  if (controls.length) {
    const on = (i) => controls.every((w) => i.toString(2).padStart(n, "0")[w] === "1");
    const Uc = identity(N);
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (on(i) && on(j)) Uc[i][j] = U[i][j];
    U = Uc;
  }
  return U;
}

// `values`: parameter values in units of π
function simulate(quirk, values = {}) {
  const customs = {}; let cols;
  if (quirk.cols) { cols = quirk.cols; for (const g of quirk.gates || []) customs[g.id] = bitReverse(parseQuirkMatrix(g.matrix)); }
  else { customs["~g"] = bitReverse(parseQuirkMatrix(quirk.matrix)); cols = [[...Array(quirk.controls || 0).fill("•"), "~g"]]; }
  let n = 0;
  for (const col of cols) col.forEach((cell, wire) => {
    if (cell === 1 || cell === undefined) return;
    let w = 1;
    if (typeof cell === "string" && customs[cell]) w = width(customs[cell]);
    else if (typeof cell === "string" && /^QFT(\d+)$/.test(cell)) w = +cell.slice(3);
    n = Math.max(n, wire + w);
  });
  let U = identity(2 ** n);
  for (const col of cols) U = matmul(columnUnitary(n, col, values, customs), U);
  if (quirk.phase) {
    const turns = Array.isArray(quirk.phase) ? quirk.phase.reduce((acc, t) => acc + (t.mul == null ? 1 : t.mul) * values[t.param], 0) : GateMath.evaluate(quirk.phase)[0] / PI;
    U = scale(U, cexp(PI * turns));
  }
  return U;
}

module.exports = { simulate, parseQuirkMatrix, parseComplex };
