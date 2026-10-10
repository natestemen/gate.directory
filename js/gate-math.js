/* Complex-valued expression evaluator for gate matrices.
 *
 * Entries of a gate's `matrix` are expressions such as "cos(theta/2)",
 * "-i sin(theta/2)", "exp(i pi/4)", "(1+i)/2" or "exp(2 pi i/3)". Parameters
 * are angles: their defaults and ranges are written in units of π, and inside
 * an expression a parameter's name stands for the angle in radians.
 *
 * Grammar: + - * / ^, parentheses, juxtaposition as multiplication ("2 pi t",
 * "i sin(x)"), constants pi, e, i, functions sqrt exp cos sin tan acos asin
 * atan ln. Complex numbers are [re, im].
 */
(function (root) {
  "use strict";

  const C = (re, im = 0) => [re, im];
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
  const mul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
  const div = (a, b) => {
    const d = b[0] * b[0] + b[1] * b[1];
    return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d];
  };
  const exp = (z) => { const r = Math.exp(z[0]); return [r * Math.cos(z[1]), r * Math.sin(z[1])]; };
  const log = (z) => [Math.log(Math.hypot(z[0], z[1])), Math.atan2(z[1], z[0])];
  const pow = (a, b) => {
    if (a[0] === 0 && a[1] === 0) return b[0] === 0 && b[1] === 0 ? C(1) : C(0);
    if (a[1] === 0 && b[1] === 0 && (Number.isInteger(b[0]) || a[0] > 0)) return C(Math.pow(a[0], b[0]));
    return exp(mul(b, log(a)));
  };
  const sqrt = (z) => (z[1] === 0 && z[0] >= 0 ? C(Math.sqrt(z[0])) : pow(z, C(0.5)));
  const I = C(0, 1), NEG_I = C(0, -1);
  const cos = (z) => (z[1] === 0 ? C(Math.cos(z[0])) : div(add(exp(mul(I, z)), exp(mul(NEG_I, z))), C(2)));
  const sin = (z) => (z[1] === 0 ? C(Math.sin(z[0])) : div(sub(exp(mul(I, z)), exp(mul(NEG_I, z))), C(0, 2)));
  const realFn = (f) => (z) => C(f(z[0]));
  const FUNCS = { sqrt, exp, cos, sin, ln: log, tan: (z) => div(sin(z), cos(z)), acos: realFn(Math.acos), asin: realFn(Math.asin), atan: realFn(Math.atan) };
  const CONSTS = { pi: C(Math.PI), e: C(Math.E), i: I };

  // Parse once into a closure over the parameter environment (radians).
  function compile(expr) {
    if (typeof expr === "number") { const v = C(expr); return () => v; }
    const tokens = String(expr).match(/\d+\.?\d*|[A-Za-z_]\w*|[-+*/^(),]/g) || [];
    let pos = 0;
    const peek = () => tokens[pos];
    const next = () => tokens[pos++];
    const expect = (tok) => { if (next() !== tok) throw new Error(`expected ${tok} in "${expr}"`); };
    const startsOperand = (tok) => tok !== undefined && /^[\dA-Za-z_(]/.test(tok);

    function atom() {
      const tok = next();
      if (tok === undefined) throw new Error(`unexpected end of "${expr}"`);
      if (tok === "(") { const f = sum(); expect(")"); return f; }
      if (/^\d/.test(tok)) { const v = C(parseFloat(tok)); return () => v; }
      if (FUNCS[tok]) { expect("("); const arg = sum(); expect(")"); const fn = FUNCS[tok]; return (env) => fn(arg(env)); }
      if (CONSTS[tok]) { const v = CONSTS[tok]; return () => v; }
      if (/^[A-Za-z_]/.test(tok)) return (env) => {
        if (!(tok in env)) throw new Error(`unknown symbol "${tok}" in "${expr}"`);
        const v = env[tok];
        return typeof v === "number" ? C(v) : v;
      };
      throw new Error(`unexpected "${tok}" in "${expr}"`);
    }
    function power() { const base = atom(); if (peek() === "^") { next(); const ex = unary(); return (env) => pow(base(env), ex(env)); } return base; }
    function unary() {
      if (peek() === "-") { next(); const f = unary(); return (env) => mul(C(-1), f(env)); }
      if (peek() === "+") { next(); return unary(); }
      return power();
    }
    function product() {
      let f = unary();
      for (;;) {
        if (peek() === "*") { next(); const g = unary(); const h = f; f = (env) => mul(h(env), g(env)); }
        else if (peek() === "/") { next(); const g = unary(); const h = f; f = (env) => div(h(env), g(env)); }
        else if (startsOperand(peek())) { const g = power(); const h = f; f = (env) => mul(h(env), g(env)); }
        else return f;
      }
    }
    function sum() {
      let f = product();
      while (peek() === "+" || peek() === "-") {
        const op = next(), g = product(), h = f;
        f = op === "+" ? (env) => add(h(env), g(env)) : (env) => sub(h(env), g(env));
      }
      return f;
    }
    const fn = sum();
    if (pos !== tokens.length) throw new Error(`trailing "${tokens[pos]}" in "${expr}"`);
    return fn;
  }

  const evaluate = (expr, env = {}) => compile(expr)(env);

  // rows of expressions -> rows of [re, im]; parameter values are given in units of π
  function compileMatrix(rows) {
    const compiled = rows.map((row) => row.map(compile));
    return (valuesInPi = {}) => {
      const env = {};
      for (const k in valuesInPi) env[k] = valuesInPi[k] * Math.PI;
      return compiled.map((row) => row.map((f) => f(env)));
    };
  }

  const api = { compile, evaluate, compileMatrix, complex: { C, add, sub, mul, div, exp, abs: (z) => Math.hypot(z[0], z[1]), arg: (z) => Math.atan2(z[1], z[0]) } };
  if (typeof module !== "undefined") module.exports = api;
  else root.GateMath = api;
})(typeof window !== "undefined" ? window : globalThis);
