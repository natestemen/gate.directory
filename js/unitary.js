/* The unitary, drawn.
 *
 * Reads the gate's parameters and matrix (front matter `params` and `matrix`,
 * evaluated by gate-math.js) and draws every entry as a disc: area = |U_jk|²,
 * hue and hand = phase. Parametrised gates get one slider per parameter and a
 * play button that runs them along the same path the Quirk link animates.
 */
(function () {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";
  const PI = Math.PI;
  const GM = window.GateMath;
  if (!GM) return;
  const { abs: cabs, arg: carg } = GM.complex;

  function fraction(x, maxDen = 48) {
    for (let d = 1; d <= maxDen; d++) { const n = Math.round(x * d); if (Math.abs(n / d - x) < 1e-6) return [n, d]; }
    return null;
  }
  function phaseText(phi) {  // radians -> "π/2", "−3π/4", "0.37π"
    const x = phi / PI, f = fraction(x);
    if (!f) return (x < 0 ? "−" : "") + Math.abs(x).toFixed(2) + "π";
    const [n, d] = f;
    if (n === 0) return "0";
    const k = Math.abs(n) === 1 ? "" : String(Math.abs(n));
    return (n < 0 ? "−" : "") + k + "π" + (d === 1 ? "" : "/" + d);
  }
  function piTex(x) {
    const f = fraction(x, 192);
    if (!f) return x.toFixed(3) + "\\pi";
    const [n, d] = f;
    if (n === 0) return "0";
    const k = Math.abs(n) === 1 ? "" : String(Math.abs(n));
    return (n < 0 ? "-" : "") + k + "\\pi" + (d === 1 ? "" : "/" + d);
  }
  function setMath(node, tex, text) {
    if (window.katex) { try { window.katex.render(tex, node, { throwOnError: false }); return; } catch (e) { /* fall through */ } }
    node.textContent = text;
  }
  const hue = (phi) => (75 + ((phi * 180) / PI + 360)) % 360;
  const fill = (phi) => `oklch(0.74 0.13 ${hue(phi).toFixed(1)})`;
  function el(name, attrs, parent) {
    const node = document.createElementNS(SVG_NS, name);
    for (const k in attrs) if (attrs[k] != null) node.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(node);
    return node;
  }

  function init(section) {
    let data = null;
    try { data = JSON.parse(section.querySelector(".unitary-data").textContent); } catch (e) { return; }
    if (!data || !data.matrix) return;
    const svg = section.querySelector(".unitary-svg");
    const figure = section.querySelector(".unitary-figure");
    const tooltip = section.querySelector(".unitary-tooltip");
    const controls = section.querySelector(".unitary-controls");
    const legend = section.querySelector(".unitary-legend");

    const params = Object.entries(data.params || {}).map(([key, p]) => ({
      key,
      label: p.label || key,
      value: GM.evaluate(String(p.default == null ? 0 : p.default))[0],
      min: Array.isArray(p.range) ? GM.evaluate(String(p.range[0]))[0] : 0,
      max: Array.isArray(p.range) ? GM.evaluate(String(p.range[1]))[0] : 2,
      spin: data.spin && data.spin[key] != null ? data.spin[key] : null,
    }));
    const values = {};
    for (const p of params) values[p.key] = p.value;

    let matrixAt, U;
    try { matrixAt = GM.compileMatrix(data.matrix); U = matrixAt(values); } catch (e) { section.hidden = true; console.warn("unitary:", e.message); return; }
    const N = U.length;
    const qubitLike = Number.isInteger(Math.log2(N));
    const digits = qubitLike ? Math.round(Math.log2(N)) : 1;
    const label = (i) => (qubitLike ? i.toString(2).padStart(digits, "0") : String(i));
    const cell = N <= 2 ? 60 : N <= 4 ? 44 : N <= 9 ? 30 : 19;
    const vertical = N > 9;
    const labelW = vertical ? 12 + (digits + 2) * 5.6 : 10 + Math.max(digits, 1) * 7;
    const size = labelW + N * cell + 6;
    svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
    svg.style.maxWidth = Math.min(380, size) + "px";

    const gGrid = el("g", { class: "unitary-grid" }, svg);
    for (let i = 0; i <= N; i++) {
      el("line", { x1: labelW, y1: labelW + i * cell, x2: labelW + N * cell, y2: labelW + i * cell }, gGrid);
      el("line", { x1: labelW + i * cell, y1: labelW, x2: labelW + i * cell, y2: labelW + N * cell }, gGrid);
    }
    for (let i = 0; i < N; i++) {
      const t1 = el("text", { class: "unitary-label", x: labelW - 4, y: labelW + i * cell + cell / 2 + 3, "text-anchor": "end" }, svg);
      t1.textContent = "⟨" + label(i) + "|";
      const cx = labelW + i * cell + cell / 2;
      const t2 = vertical
        ? el("text", { class: "unitary-label", x: cx + 3, y: labelW - 5, "text-anchor": "start", transform: `rotate(-90 ${cx + 3} ${labelW - 5})` }, svg)
        : el("text", { class: "unitary-label", x: cx, y: labelW - 5, "text-anchor": "middle" }, svg);
      t2.textContent = "|" + label(i) + "⟩";
    }
    const discs = [];
    for (let i = 0; i < N; i++) {
      discs.push([]);
      for (let j = 0; j < N; j++) {
        const cx = labelW + j * cell + cell / 2, cy = labelW + i * cell + cell / 2;
        const g = el("g", { class: "unitary-entry" }, svg);
        const disc = el("circle", { cx, cy, r: 0 }, g);
        const hand = el("line", { class: "unitary-hand", x1: cx, y1: cy, x2: cx, y2: cy }, g);
        const hit = el("rect", { class: "unitary-hit", x: labelW + j * cell, y: labelW + i * cell, width: cell, height: cell }, g);
        discs[i].push({ g, disc, hand, hit, cx, cy });
        const show = () => {
          const u = U[i][j], mag = cabs(u);
          tooltip.textContent = "";
          const strong = document.createElement("strong");
          strong.textContent = mag < 1e-9 ? "0" : mag.toFixed(3) + (Math.abs(carg(u)) < 1e-9 ? "" : " e^(i·" + phaseText(carg(u)) + ")");
          tooltip.appendChild(strong);
          const small = document.createElement("small");
          small.textContent = "⟨" + label(i) + "|U|" + label(j) + "⟩";
          tooltip.appendChild(small);
          tooltip.hidden = false;
          const r = hit.getBoundingClientRect(), f = figure.getBoundingClientRect();
          tooltip.style.left = r.left + r.width / 2 - f.left + "px";
          tooltip.style.top = r.top - f.top + "px";
        };
        const hide = () => { tooltip.hidden = true; };
        g.addEventListener("pointerenter", show);
        g.addEventListener("focus", show);
        g.addEventListener("pointerleave", hide);
        g.addEventListener("blur", hide);
      }
    }

    function draw() {
      const rmax = 0.46 * cell;
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
        const u = U[i][j], mag = cabs(u), d = discs[i][j];
        if (mag < 1e-6) { d.disc.setAttribute("r", 0); d.hand.setAttribute("x2", d.cx); d.hand.setAttribute("y2", d.cy); d.g.classList.add("is-zero"); d.g.removeAttribute("tabindex"); continue; }
        d.g.classList.remove("is-zero");
        d.g.setAttribute("tabindex", "0");
        const r = rmax * mag, phi = carg(u);
        d.disc.setAttribute("r", r.toFixed(2));
        d.disc.setAttribute("fill", fill(phi));
        d.hand.setAttribute("x2", (d.cx + r * Math.cos(phi)).toFixed(2));
        d.hand.setAttribute("y2", (d.cy - r * Math.sin(phi)).toFixed(2));
      }
    }

    // legend: phase wheel
    const wheel = el("svg", { viewBox: "-40 -40 80 80", class: "unitary-wheel", "aria-hidden": "true" }, legend);
    for (let k = 0; k < 48; k++) {
      const a0 = (k / 48) * 2 * PI, a1 = ((k + 1) / 48) * 2 * PI + 0.02, r0 = 22, r1 = 32;
      const p = (r, a) => `${(r * Math.cos(a)).toFixed(2)} ${(-r * Math.sin(a)).toFixed(2)}`;
      el("path", { d: `M ${p(r0, a0)} L ${p(r1, a0)} A ${r1} ${r1} 0 0 0 ${p(r1, a1)} L ${p(r0, a1)} A ${r0} ${r0} 0 0 1 ${p(r0, a0)} Z`, fill: fill(a0 + PI / 48) }, wheel);
    }
    for (const [a, text] of [[0, "0"], [PI / 2, "π/2"], [PI, "π"], [-PI / 2, "−π/2"]]) {
      const tnode = el("text", { x: (37 * Math.cos(a)).toFixed(1), y: (-37 * Math.sin(a) + 3).toFixed(1), "text-anchor": "middle" }, wheel);
      tnode.textContent = text;
    }

    // one slider per parameter; play runs them along Quirk's clock
    if (params.length) {
      const rows = {};
      let playing = false, raf = null, t0 = null, t = 0;
      const refresh = () => { U = matrixAt(values); draw(); };
      const setValue = (p, v, fromSlider) => {
        values[p.key] = v;
        if (!fromSlider) rows[p.key].input.value = v;
        setMath(rows[p.key].out, piTex(v), phaseText(v * PI));
        rows[p.key].input.setAttribute("aria-valuetext", phaseText(v * PI));
      };
      const play = document.createElement("button");
      const stop = () => { playing = false; t0 = null; if (raf) cancelAnimationFrame(raf); play.textContent = "Play"; };
      for (const p of params) {
        const row = document.createElement("label");
        row.className = "weyl-control";
        const name = document.createElement("span");
        setMath(name, p.label, p.label.replace(/^\\/, ""));
        const input = document.createElement("input");
        input.type = "range"; input.min = p.min; input.max = p.max; input.step = 1 / 48; input.value = p.value;
        input.setAttribute("aria-label", p.key + " (in units of π)");
        const out = document.createElement("output");
        row.append(name, input, out);
        controls.appendChild(row);
        rows[p.key] = { input, out };
        input.addEventListener("input", () => { stop(); setValue(p, parseFloat(input.value), true); refresh(); emit(p); });
        setValue(p, p.value, false);
      }
      const emit = (p) => document.dispatchEvent(new CustomEvent("gate:param", { detail: { name: p.key, value: values[p.key], source: section } }));
      document.addEventListener("gate:param", (e) => {
        const { name, value, source } = e.detail || {};
        if (source === section || !rows[name]) return;
        stop();
        setValue(params.find((p) => p.key === name), value, false);
        refresh();
      });
      play.type = "button"; play.className = "button unitary-play"; play.textContent = "Play";
      controls.appendChild(play);
      const step = (now) => {
        if (!playing) return;
        if (t0 == null) t0 = now - t * 8000;
        t = ((now - t0) / 8000) % 1;
        for (const p of params) {
          const span = p.max - p.min;
          const v = p.spin != null ? p.spin * t : p.min + span * t;
          setValue(p, p.spin != null && v > p.max ? p.min + ((v - p.min) % span) : v, false);
          emit(p);
        }
        refresh();
        raf = requestAnimationFrame(step);
      };
      play.addEventListener("click", () => { if (playing) stop(); else { playing = true; play.textContent = "Pause"; raf = requestAnimationFrame(step); } });
    }
    draw();
  }

  document.querySelectorAll(".unitary").forEach(init);
})();
