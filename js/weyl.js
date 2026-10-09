/* Weyl chamber panel for two-qubit gate pages.
 *
 * Convention (the same as the canonical-gate page, Qiskit and Cirq):
 *   U ≃ exp(i(a XX + b YY + c ZZ)) up to single-qubit gates and a global phase,
 *   reduced to the chamber π/4 ≥ a ≥ b ≥ |c|, with c ≥ 0 on the a = π/4 face.
 * Every number in this file is in units of π.
 *
 * Front matter it understands:
 *   weyl: [1/4, 0, 0]                          # fixed gate (optionally {coords: [...], label: CNOT})
 *   weyl:                                      # parametrised gate
 *     coords: [-theta/2, 0, 0]                 # raw exponent coefficients, affine in the parameters
 *     params:
 *       theta: { label: \theta, range: [0, 1], default: 1/2 }
 */
(function () {
  "use strict";

  const EPS = 1e-9;
  const SVG_NS = "http://www.w3.org/2000/svg";
  const STEP = 1 / 48; // slider resolution: hits π/2, π/3, π/4, π/6, π/8, π/12, π/16, π/24
  const PATH_SAMPLES = 160;
  const LABEL_PRIORITY = ["cnot", "iswap", "swap", "sqrt-swap", "sqrt-iswap", "b", "sycamore", "cs"];

  /* ------------------------------------------------------------------ numbers */

  function num(v, fallback = 0) {
    if (typeof v === "number") return v;
    if (v == null) return fallback;
    const s = String(v).trim();
    const m = s.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/);
    if (m) return parseFloat(m[1]) / parseFloat(m[2]);
    const f = parseFloat(s);
    return Number.isFinite(f) ? f : fallback;
  }

  function fraction(x, maxDen = 192) {
    for (let d = 1; d <= maxDen; d++) {
      const n = Math.round(x * d);
      if (Math.abs(n / d - x) < 1e-7) return [n, d];
    }
    return null;
  }

  // multiples of π as TeX: 0, \pi/4, 3\pi/8, -\pi/8, 2\pi
  function piTex(x) {
    const f = fraction(x);
    if (!f) return x.toFixed(3) + "\\pi";
    const [n, d] = f;
    if (n === 0) return "0";
    const k = Math.abs(n) === 1 ? "" : String(Math.abs(n));
    return (n < 0 ? "-" : "") + k + "\\pi" + (d === 1 ? "" : "/" + d);
  }

  function piText(x) {
    return piTex(x).replace(/\\pi/g, "π").replace(/^-/, "−");
  }

  function setMath(node, tex, text) {
    if (window.katex) {
      try {
        window.katex.render(tex, node, { throwOnError: false });
        return;
      } catch (e) {
        /* fall through to plain text */
      }
    }
    node.textContent = text;
  }

  /* ------------------------------------------------- coordinate expressions */

  // "theta/2", "-phi/4", "3/16", 0, "a"
  function compileCoord(expr) {
    if (typeof expr === "number") return () => expr;
    const m = String(expr)
      .trim()
      .match(/^([+-])?\s*(\d+(?:\.\d+)?)?\s*\*?\s*([A-Za-z_]\w*)?\s*(?:\/\s*(\d+(?:\.\d+)?))?$/);
    if (!m || (!m[2] && !m[3])) {
      console.warn("weyl: cannot parse coordinate", expr);
      return () => 0;
    }
    const sign = m[1] === "-" ? -1 : 1;
    const k = m[2] ? parseFloat(m[2]) : 1;
    const name = m[3];
    const d = m[4] ? parseFloat(m[4]) : 1;
    return (params) => (sign * k * (name ? num(params[name]) : 1)) / d;
  }

  function normaliseSpec(w) {
    const raw = Array.isArray(w) ? { coords: w } : w || {};
    const coords = (raw.coords || [0, 0, 0]).map(compileCoord);
    const params = Object.entries(raw.params || {}).map(([key, p]) => {
      p = p || {};
      const range = Array.isArray(p.range) ? p.range : [0, 1];
      const min = num(range[0]);
      return { key, label: p.label || key, min, max: num(range[1], 1), value: num(p.default, min) };
    });
    return { coords, params };
  }

  /* ---------------------------------------------- chamber arithmetic (π units) */

  // Reduce raw exponent coefficients to the chamber. `prev` (optional) keeps a
  // moving point on its side of the mirror face a = π/4.
  function canonical(p, prev) {
    let v = p.map((x) => {
      x = ((x % 0.5) + 0.5) % 0.5; // exp(iπ/2 XX) is a local gate, so a ~ a + 1/2
      return x > 0.25 + EPS ? x - 0.5 : x; // (-1/4, 1/4]
    });
    v.sort((x, y) => Math.abs(y) - Math.abs(x)); // permuting XX, YY, ZZ is local
    if (v[0] < -EPS && v[1] < -EPS) {
      v[0] = -v[0]; // flipping the sign of two coefficients is local
      v[1] = -v[1];
    } else if (v[0] < -EPS) {
      v[0] = -v[0];
      v[2] = -v[2];
    } else if (v[1] < -EPS) {
      v[1] = -v[1];
      v[2] = -v[2];
    }
    v = v.map((x) => (Math.abs(x) < EPS ? 0 : x));
    if (onMirrorFace(v) && v[2] !== 0) {
      const c = Math.abs(v[2]);
      v[2] = prev && Math.abs(prev[2] + c) < Math.abs(prev[2] - c) ? -c : c;
    }
    return v;
  }

  function onMirrorFace(v) {
    return Math.abs(v[0] - 0.25) < 1e-7;
  }

  function mirror(v) {
    return [v[0], v[1], -v[2]];
  }

  function isPerfectEntangler(v) {
    return v[0] + v[1] >= 0.25 - 1e-7 && v[1] + Math.abs(v[2]) <= 0.25 + 1e-7;
  }

  function isLocal(v) {
    return v.every((x) => Math.abs(x) < 1e-7);
  }

  function same(u, v) {
    return u.every((x, i) => Math.abs(x - v[i]) < 1e-6);
  }

  // Equal as gates (allowing for the mirror face).
  function sameGate(u, v) {
    return same(u, v) || (onMirrorFace(u) && same(mirror(u), v));
  }

  /* -------------------------------------------------------------- geometry */

  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = (a) => {
    const l = Math.hypot(a[0], a[1], a[2]) || 1;
    return [a[0] / l, a[1] / l, a[2] / l];
  };

  const PT = {
    O: [0, 0, 0], // identity
    L: [0.25, 0, 0], // CNOT
    S: [0.25, 0.25, 0.25], // SWAP
    T: [0.25, 0.25, -0.25], // SWAP again (mirror face)
    A2: [0.25, 0.25, 0], // iSWAP
    P: [0.125, 0.125, 0.125], // √SWAP
    Q: [0.125, 0.125, -0.125], // √SWAP†
    R: [0.25, 0.125, 0.125],
    U: [0.25, 0.125, -0.125],
  };
  const CHAMBER_FACES = [
    [PT.O, PT.L, PT.S],
    [PT.O, PT.L, PT.T],
    [PT.O, PT.S, PT.T],
    [PT.L, PT.S, PT.T],
  ];
  // perfect entanglers: a + b ≥ π/4 and b + |c| ≤ π/4
  const PE_FACES = [
    [PT.L, PT.R, PT.A2, PT.U],
    [PT.L, PT.P, PT.Q],
    [PT.A2, PT.R, PT.P],
    [PT.A2, PT.U, PT.Q],
    [PT.L, PT.R, PT.P],
    [PT.L, PT.U, PT.Q],
    [PT.P, PT.Q, PT.A2],
  ];

  // Index the vertices of a convex solid, orient faces outwards, list edges.
  function makeSolid(faceLists) {
    const verts = [];
    const index = (p) => {
      let i = verts.findIndex((q) => same(q, p));
      if (i < 0) i = verts.push(p) - 1;
      return i;
    };
    let faces = faceLists.map((f) => f.map(index));
    const centre = verts.reduce((acc, v) => [acc[0] + v[0], acc[1] + v[1], acc[2] + v[2]], [0, 0, 0]).map((x) => x / verts.length);
    const normalOf = (f) => norm(cross(sub(verts[f[1]], verts[f[0]]), sub(verts[f[2]], verts[f[0]])));
    faces = faces.map((f) => (dot(normalOf(f), sub(verts[f[0]], centre)) < 0 ? f.slice().reverse() : f));
    const edges = new Map();
    faces.forEach((f, fi) => {
      f.forEach((a, i) => {
        const b = f[(i + 1) % f.length];
        const key = a < b ? a + "-" + b : b + "-" + a;
        if (!edges.has(key)) edges.set(key, { a, b, faces: [] });
        edges.get(key).faces.push(fi);
      });
    });
    return { verts, faces, normals: faces.map(normalOf), edges: [...edges.values()] };
  }

  const CHAMBER = makeSolid(CHAMBER_FACES);
  const PE = makeSolid(PE_FACES);
  const CENTRE = [0.1875, 0.125, 0]; // vertex centroid of the chamber

  const DEFAULT_VIEW = { yaw: -0.38, pitch: 0.4 };
  const PITCH_MIN = -0.15, PITCH_MAX = 0.75;

  // View axes: screen-up = a (entanglement grows upwards), screen-right = c (so a
  // gate and its mirror image sit left/right of each other), depth = b.
  // Returns [right, depth, up]; yaw spins about the vertical, pitch tilts.
  function rotator(view) {
    const cy = Math.cos(view.yaw), sy = Math.sin(view.yaw);
    const cp = Math.cos(view.pitch), sp = Math.sin(view.pitch);
    return (p) => {
      const x = p[2], y = p[1], z = p[0];
      const x1 = x * cy - y * sy;
      const y1 = x * sy + y * cy;
      return [x1, y1 * cp - z * sp, y1 * sp + z * cp];
    };
  }

  // Scale and screen offset that keep the chamber inside the box for every allowed
  // rotation, centred on the union of those views rather than on the centroid.
  function fitView(width, height, padX, padY) {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (let yaw = 0; yaw < Math.PI * 2; yaw += Math.PI / 24) {
      for (const pitch of [0.15, 0.3, 0.45]) {
        const rot = rotator({ yaw, pitch });
        for (const v of CHAMBER.verts) {
          const r = rot(sub(v, CENTRE));
          minX = Math.min(minX, r[0]); maxX = Math.max(maxX, r[0]);
          minY = Math.min(minY, r[2]); maxY = Math.max(maxY, r[2]);
        }
      }
    }
    const scale = Math.min((width - 2 * padX) / (maxX - minX), (height - 2 * padY) / (maxY - minY));
    return { scale, cx: width / 2 - ((minX + maxX) / 2) * scale, cy: height / 2 + ((minY + maxY) / 2) * scale };
  }

  /* --------------------------------------------------------------- svg bits */

  function el(name, attrs, parent) {
    const node = document.createElementNS(SVG_NS, name);
    for (const k in attrs) if (attrs[k] != null) node.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(node);
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function pointsAttr(pts) {
    return pts.map((p) => p.x.toFixed(2) + "," + p.y.toFixed(2)).join(" ");
  }

  // Faces of a convex solid, painter-sorted; `which` selects front- or back-facing ones.
  function drawFaces(group, solid, project, rot, style, which) {
    const pv = solid.verts.map(project);
    const light = norm([-0.35, -0.5, 0.8]);
    const items = solid.faces
      .map((f, i) => {
        const n = rot(solid.normals[i]);
        const front = n[1] < 0;
        if ((which === "front") !== front) return null;
        const depth = f.reduce((s, vi) => s + pv[vi].depth, 0) / f.length;
        const shade = Math.max(0, dot(n, light));
        return { f, depth, front, shade };
      })
      .filter(Boolean)
      .sort((a, b) => b.depth - a.depth);
    for (const it of items) {
      el("polygon", {
        points: pointsAttr(it.f.map((vi) => pv[vi])),
        fill: style.fill,
        "fill-opacity": (it.front ? style.frontOpacity : style.backOpacity) + style.shadeOpacity * it.shade,
        stroke: "none",
      }, group);
    }
  }

  function drawEdges(group, solid, project, rot, style, which) {
    const pv = solid.verts.map(project);
    const front = solid.normals.map((n) => rot(n)[1] < 0);
    for (const e of solid.edges) {
      const visible = e.faces.some((fi) => front[fi]);
      if ((which === "front") !== visible) continue;
      el("line", {
        x1: pv[e.a].x.toFixed(2), y1: pv[e.a].y.toFixed(2),
        x2: pv[e.b].x.toFixed(2), y2: pv[e.b].y.toFixed(2),
        stroke: style.stroke,
        "stroke-width": style.width,
        "stroke-linecap": "round",
        "stroke-dasharray": visible ? null : style.dash,
        opacity: visible ? 1 : style.hiddenOpacity,
      }, group);
    }
  }

  // Labels prefer the side away from the figure's centre, then fall back to the
  // first of right / left / above / below that collides with nothing else.
  function placeLabels(markers, currentPoint, centre) {
    const W = markers.W, H = markers.H;
    const taken = markers.map((m) => box(m.screen.x - 6, m.screen.y - 6, 12, 12));
    taken.push(box(currentPoint.x - 7, currentPoint.y - 7, 14, 14));
    const hits = (b) => taken.some((o) => b.x1 < o.x2 && b.x2 > o.x1 && b.y1 < o.y2 && b.y2 > o.y1);
    const inside = (b) => b.x1 >= 0 && b.y1 >= 0 && b.x2 <= W && b.y2 <= H;
    const ordered = markers.filter((m) => m.text).sort((m1, m2) => m1.rank - m2.rank);
    for (const m of ordered) {
      const { x, y } = m.screen;
      const w = m.text.textContent.length * 7.3 + 2;
      const right = { anchor: "start", x: x + 10, y: y + 4.5, box: box(x + 9, y - 7, w, 14) };
      const left = { anchor: "end", x: x - 10, y: y + 4.5, box: box(x - 9 - w, y - 7, w, 14) };
      const above = { anchor: "middle", x, y: y - 10, box: box(x - w / 2, y - 21, w, 14) };
      const below = { anchor: "middle", x, y: y + 18, box: box(x - w / 2, y + 8, w, 14) };
      const dx = x - centre.x, dy = y - centre.y;
      const order = Math.abs(dx) > Math.abs(dy) * 0.7
        ? (dx > 0 ? [right, above, below, left] : [left, above, below, right])
        : (dy > 0 ? [below, right, left, above] : [above, right, left, below]);
      const pick = order.find((c) => inside(c.box) && !hits(c.box)) || order.find((c) => !hits(c.box)) || order[0];
      m.text.setAttribute("text-anchor", pick.anchor);
      m.text.setAttribute("x", pick.x);
      m.text.setAttribute("y", pick.y);
      taken.push(pick.box);
    }
  }

  function box(x, y, w, h) {
    return { x1: x, y1: y, x2: x + w, y2: y + h };
  }

  /* ------------------------------------------------------------------ panel */

  function init(section) {
    const dataNode = section.querySelector(".weyl-data");
    let data = null;
    try {
      data = JSON.parse(dataNode ? dataNode.textContent : "null");
    } catch (e) {
      data = null;
    }
    if (!data || !data.weyl) return;

    const svg = section.querySelector(".weyl-svg");
    const tooltip = section.querySelector(".weyl-tooltip");
    const figure = section.querySelector(".weyl-figure");
    const resetButton = section.querySelector(".weyl-reset");
    const controls = section.querySelector(".weyl-controls");
    const coordsNode = section.querySelector(".weyl-coords");
    const equivNode = section.querySelector(".weyl-equiv");
    const badges = [...section.querySelectorAll(".weyl-badge")];

    const [, , W, H] = (svg.getAttribute("viewBox") || "0 0 360 330").split(/\s+/).map(Number);
    const fit = fitView(W, H, 18, 16);
    const spec = normaliseSpec(data.weyl);
    const params = {};
    for (const p of spec.params) params[p.key] = p.value;
    const view = { ...DEFAULT_VIEW };

    const evalCoords = (values) => spec.coords.map((f) => f(values));

    // Canonical point for the current parameters. On the mirror face, side with
    // the rest of the family so that moving a slider never jumps.
    function pointAt(values) {
      const v = canonical(evalCoords(values));
      if (onMirrorFace(v) && v[2] !== 0) {
        for (const p of spec.params) {
          for (const d of [-1e-3, 1e-3]) {
            const w = canonical(evalCoords({ ...values, [p.key]: values[p.key] + d }));
            if (!onMirrorFace(w) && w[2] !== 0) {
              v[2] = Math.sign(w[2]) * Math.abs(v[2]);
              return v;
            }
          }
        }
      }
      return v;
    }

    /* landmarks: group the fixed gates by position */
    const groups = [];
    const addToGroup = (coords, gate) => {
      let g = groups.find((x) => same(x.coords, coords));
      if (!g) {
        g = { coords, gates: [] };
        groups.push(g);
      }
      g.gates.push(gate);
    };
    if (data.identityUrl) {
      addToGroup([0, 0, 0], { slug: "identity", title: "Identity", label: "I", url: data.identityUrl });
    }
    for (const lm of data.landmarks) addToGroup(canonical(lm.coords.map(num)), lm);
    for (const g of groups) {
      const rank = (gate) => {
        const i = LABEL_PRIORITY.indexOf(gate.slug);
        return i < 0 ? LABEL_PRIORITY.length : i;
      };
      g.gates.sort((x, y) => rank(x) - rank(y));
      g.label = g.gates[0].label;
      g.url = g.gates[0].url;
      g.onlySelf = g.gates.length === 1 && g.gates[0].slug === data.slug;
    }

    /* static svg scaffolding (groups in paint order) */
    const layer = {};
    for (const name of ["back", "pe", "front", "guides", "edges", "paths", "landmarks", "current"]) {
      layer[name] = el("g", { class: "weyl-layer-" + name }, svg);
    }

    const markers = [];
    markers.W = W;
    markers.H = H;
    const makeMarker = (g, coords, ghost) => {
      const a = el("a", { class: "weyl-landmark" + (ghost ? " weyl-ghost" : ""), href: g.url }, layer.landmarks);
      a.setAttribute("aria-label", g.gates.map((x) => x.title).join(", "));
      const hit = el("circle", { class: "weyl-hit", r: 13 }, a);
      const dotNode = g.onlySelf && !ghost ? null : el("circle", { class: "weyl-dot", r: 4.5 }, a);
      let text = null;
      if (!ghost || Math.abs(coords[2]) >= 0.1) {
        text = el("text", { class: ghost ? "weyl-ghost-label" : null }, a);
        text.textContent = g.label;
      }
      const rank = Math.min(...g.gates.map((x) => { const i = LABEL_PRIORITY.indexOf(x.slug); return i < 0 ? LABEL_PRIORITY.length : i; }));
      const m = { group: g, coords, ghost, a, hit, dot: dotNode, text, rank: rank + (ghost ? 100 : 0), screen: null };
      const show = () => showTooltip(m);
      a.addEventListener("pointerenter", show);
      a.addEventListener("focus", show);
      a.addEventListener("pointerleave", hideTooltip);
      a.addEventListener("blur", hideTooltip);
      markers.push(m);
      return m;
    };
    for (const g of groups) {
      makeMarker(g, g.coords, false);
      if (onMirrorFace(g.coords) && g.coords[2] !== 0) makeMarker(g, mirror(g.coords), true);
    }

    const current = {
      drop: el("line", { class: "weyl-current-drop" }, layer.current),
      twin: el("circle", { class: "weyl-current-twin", r: 6 }, layer.current), // mirror image on the a = π/4 face
      dot: el("circle", { class: "weyl-current-dot", r: 6 }, layer.current),
    };

    function showTooltip(m) {
      clear(tooltip);
      const names = m.group.gates.map((x) => x.title);
      tooltip.appendChild(document.createTextNode(names.join(" · ")));
      const small = document.createElement("small");
      small.textContent =
        "(" + m.coords.map(piText).join(", ") + ")" +
        (m.ghost ? " — the same gate, mirrored" : isPerfectEntangler(m.coords) ? " — perfect entangler" : "");
      tooltip.appendChild(small);
      tooltip.hidden = false;
      const r = m.dot ? m.dot.getBoundingClientRect() : m.hit.getBoundingClientRect();
      const f = figure.getBoundingClientRect();
      tooltip.style.left = r.left + r.width / 2 - f.left + "px";
      tooltip.style.top = r.top - f.top + "px";
    }
    function hideTooltip() {
      tooltip.hidden = true;
    }

    /* sliders */
    const outputs = {};
    for (const p of spec.params) {
      const row = document.createElement("label");
      row.className = "weyl-control";
      const name = document.createElement("span");
      setMath(name, p.label, p.label.replace(/^\\/, ""));
      const input = document.createElement("input");
      input.type = "range";
      input.min = p.min;
      input.max = p.max;
      input.step = STEP;
      input.value = p.value;
      input.setAttribute("aria-label", p.key + " (in units of π)");
      const out = document.createElement("output");
      row.append(name, input, out);
      controls.appendChild(row);
      outputs[p.key] = { input, out };
      input.addEventListener("input", () => {
        params[p.key] = parseFloat(input.value);
        update();
      });
    }

    /* readout */
    function updateReadout(v) {
      setMath(coordsNode, "(a,\\,b,\\,c) = (" + v.map(piTex).join(",\\ ") + ")", "(a, b, c) = (" + v.map(piText).join(", ") + ")");
      for (const p of spec.params) {
        const { input, out } = outputs[p.key];
        setMath(out, piTex(params[p.key]), piText(params[p.key]));
        input.setAttribute("aria-valuetext", piText(params[p.key]));
      }
      const state = isLocal(v) ? "local" : isPerfectEntangler(v) ? "perfect" : "entangling";
      for (const b of badges) b.hidden = b.dataset.state !== state;

      const others = groups
        .filter((g) => sameGate(v, g.coords))
        .flatMap((g) => g.gates)
        .filter((x) => x.slug !== data.slug)
        .sort((x, y) => x.title.localeCompare(y.title));
      clear(equivNode);
      equivNode.hidden = others.length === 0;
      if (others.length) {
        equivNode.appendChild(document.createTextNode("≃ "));
        others.forEach((x, i) => {
          const a = document.createElement("a");
          a.href = x.url;
          a.textContent = x.title;
          equivNode.appendChild(a);
          if (i < others.length - 1) equivNode.appendChild(document.createTextNode(", "));
        });
        equivNode.title = "locally equivalent gates";
      }
    }

    /* drawing */
    let point = pointAt(params);

    function render() {
      const rot = rotator(view);
      const project = (p) => {
        const r = rot(sub(p, CENTRE));
        return { x: fit.cx + r[0] * fit.scale, y: fit.cy - r[2] * fit.scale, depth: r[1] };
      };
      const chamberStyle = { fill: "#adc7f3", frontOpacity: 0.1, backOpacity: 0.22, shadeOpacity: 0.16,
        stroke: "black", width: 1.6, dash: "4 3", hiddenOpacity: 0.45 };
      const peStyle = { fill: "#8a6d00", frontOpacity: 0.1, backOpacity: 0.07, shadeOpacity: 0.1,
        stroke: "#8a6d00", width: 1.3, dash: "3 3", hiddenOpacity: 0.55 };

      clear(layer.back);
      drawFaces(layer.back, CHAMBER, project, rot, chamberStyle, "back");
      drawEdges(layer.back, CHAMBER, project, rot, chamberStyle, "back");

      clear(layer.pe);
      drawFaces(layer.pe, PE, project, rot, peStyle, "back");
      drawEdges(layer.pe, PE, project, rot, peStyle, "back");
      drawFaces(layer.pe, PE, project, rot, peStyle, "front");
      drawEdges(layer.pe, PE, project, rot, peStyle, "front");

      clear(layer.front);
      drawFaces(layer.front, CHAMBER, project, rot, chamberStyle, "front");

      // guides: the mirror plane c = 0 (triangle O–L–A2) and the three axes
      clear(layer.guides);
      const o = project(PT.O), a2 = project(PT.A2), l = project(PT.L);
      for (const [p, q] of [[o, a2], [l, a2]]) {
        el("line", { x1: p.x, y1: p.y, x2: q.x, y2: q.y, stroke: "#555", "stroke-width": 1, "stroke-dasharray": "2 3" }, layer.guides);
      }
      const gnomon = { x: 32, y: H - 28, len: 19 };
      for (const [dir, label] of [[[1, 0, 0], "a"], [[0, 1, 0], "b"], [[0, 0, 1], "c"]]) {
        const r = rot(dir);
        const tip = { x: gnomon.x + r[0] * gnomon.len, y: gnomon.y - r[2] * gnomon.len };
        el("line", { x1: gnomon.x, y1: gnomon.y, x2: tip.x, y2: tip.y, stroke: "#444", "stroke-width": 1.2, "stroke-linecap": "round" }, layer.guides);
        const len = Math.hypot(tip.x - gnomon.x, tip.y - gnomon.y) || 1;
        const t = el("text", { class: "weyl-axis-label", x: tip.x + ((tip.x - gnomon.x) / len) * 7, y: tip.y + ((tip.y - gnomon.y) / len) * 7 + 4, "text-anchor": "middle" }, layer.guides);
        t.textContent = label;
      }

      clear(layer.edges);
      drawEdges(layer.edges, CHAMBER, project, rot, chamberStyle, "front");

      // parameter trajectories: one curve per slider, the others held fixed
      clear(layer.paths);
      for (const p of spec.params) {
        const pts = [];
        for (let i = 0; i <= PATH_SAMPLES; i++) {
          const t = p.min + ((p.max - p.min) * i) / PATH_SAMPLES;
          const q = project(pointAt({ ...params, [p.key]: t }));
          pts.push((i ? "L" : "M") + q.x.toFixed(2) + " " + q.y.toFixed(2));
        }
        el("path", { class: "weyl-path", d: pts.join(" ") }, layer.paths);
      }

      // landmarks
      const centre = project(CENTRE);
      for (const m of markers) {
        m.screen = project(m.coords);
        m.hit.setAttribute("cx", m.screen.x);
        m.hit.setAttribute("cy", m.screen.y);
        if (m.dot) {
          m.dot.setAttribute("cx", m.screen.x);
          m.dot.setAttribute("cy", m.screen.y);
        }
      }
      const q = project(point);
      placeLabels(markers, q, centre);

      // this gate, with a drop line to the mirror plane
      const foot = project([point[0], point[1], 0]);
      current.drop.setAttribute("x1", foot.x);
      current.drop.setAttribute("y1", foot.y);
      current.drop.setAttribute("x2", q.x);
      current.drop.setAttribute("y2", q.y);
      current.dot.setAttribute("cx", q.x);
      current.dot.setAttribute("cy", q.y);
      const twin = onMirrorFace(point) && point[2] !== 0 ? project(mirror(point)) : null;
      current.twin.setAttribute("visibility", twin ? "visible" : "hidden");
      if (twin) {
        current.twin.setAttribute("cx", twin.x);
        current.twin.setAttribute("cy", twin.y);
      }

      resetButton.hidden = Math.abs(view.yaw - DEFAULT_VIEW.yaw) < 1e-6 && Math.abs(view.pitch - DEFAULT_VIEW.pitch) < 1e-6;
    }

    function update() {
      point = pointAt(params);
      render();
      updateReadout(point);
    }

    /* rotation: drag, arrow keys, double-click / button to reset */
    let drag = null;
    svg.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 || e.target.closest("a")) return;
      drag = { x: e.clientX, y: e.clientY, moved: false };
      try {
        svg.setPointerCapture(e.pointerId);
      } catch (err) {
        /* synthetic or already-released pointer */
      }
      svg.classList.add("is-dragging");
    });
    svg.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      drag.x = e.clientX;
      drag.y = e.clientY;
      if (Math.abs(dx) + Math.abs(dy) > 0) drag.moved = true;
      view.yaw += dx * 0.012;
      view.pitch = Math.max(PITCH_MIN, Math.min(PITCH_MAX, view.pitch + dy * 0.012));
      hideTooltip();
      render();
    });
    const endDrag = () => {
      drag = null;
      svg.classList.remove("is-dragging");
    };
    svg.addEventListener("pointerup", endDrag);
    svg.addEventListener("pointercancel", endDrag);
    const resetView = () => {
      Object.assign(view, DEFAULT_VIEW);
      render();
    };
    svg.addEventListener("dblclick", resetView);
    resetButton.addEventListener("click", resetView);
    svg.addEventListener("keydown", (e) => {
      const step = 0.12;
      if (e.key === "ArrowLeft") view.yaw -= step;
      else if (e.key === "ArrowRight") view.yaw += step;
      else if (e.key === "ArrowUp") view.pitch = Math.min(PITCH_MAX, view.pitch + step);
      else if (e.key === "ArrowDown") view.pitch = Math.max(PITCH_MIN, view.pitch - step);
      else if (e.key === "Home" || e.key === "0") Object.assign(view, DEFAULT_VIEW);
      else return;
      e.preventDefault();
      render();
    });

    update();

    section.weyl = {
      setView(yaw, pitch) {
        Object.assign(view, { yaw, pitch });
        render();
      },
      setParams(values) {
        for (const p of spec.params) {
          if (values[p.key] == null) continue;
          params[p.key] = num(values[p.key]);
          outputs[p.key].input.value = params[p.key];
        }
        update();
      },
      state: () => ({ point: point.slice(), view: { ...view }, params: { ...params } }),
    };
  }

  if (typeof document !== "undefined") {
    document.querySelectorAll(".weyl").forEach(init);
  }
  if (typeof module !== "undefined") {
    module.exports = { canonical, isPerfectEntangler, compileCoord, piTex, piText, num };
  }
})();
