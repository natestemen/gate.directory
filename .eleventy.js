const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const mathPassthrough = require("./lib/markdown-math");

function stripMath(str = "") {
  if (!str) {
    return "";
  }

  return str
    .replace(/\$\$([\s\S]+?)\$\$/g, "$1")
    .replace(/\$([\s\S]+?)\$/g, "$1")
    .replace(/\\\(|\\\)|\\\[|\\\]/g, "")
    .replace(/\\([a-zA-Z]+)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

// Plain-text rendering of a gate's LaTeX symbol, for SVG labels:
// \mathrm{C}\sqrt{X} -> C√X, \sqrt{i\mathrm{SWAP}} -> √iSWAP, R_{xx} -> Rxx
function symbolText(tex = "") {
  return String(tex)
    .replace(/\\(?:mathrm|text|mathsf|mathit|operatorname)\{([^{}]*)\}/g, "$1")
    .replace(/\\sqrt\{([^{}]*)\}/g, "√$1")
    .replace(/\\([a-zA-Z]+)/g, "$1")
    .replace(/[{}^_\\]/g, "")
    .replace(/\s+/g, "")
    .trim();
}

module.exports = function (eleventyConfig) {
  const markdownItOptions = {
    html: true,
    breaks: false,
    linkify: true,
    // leftDelimiter: "{{",
    // rightDelimiter: "}}",
  };

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(mathPassthrough);
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addFilter("markdown", (str) => markdownLib.render(str || ""));
  eleventyConfig.addFilter("gateBySlug", function (gates, slug) {
    if (!slug) return null;
    return gates.find((g) => g.fileSlug === slug) || null;
  });
  eleventyConfig.addFilter("searchIndex", function (gates) {
    const stripMath = (s) => (s || "").replace(/\$/g, "");
    return JSON.stringify(
      gates.map((g) => ({
        title: stripMath(g.data.title),
        url: g.url,
        aliases: g.data.alias || [],
        notations: g.data.notations || [],
        description: stripMath(g.data.description),
        sdks: Object.entries(g.data.sdks || {}).flatMap(([sdk, entry]) =>
          entry && entry.name ? [{ sdk, name: entry.name }] : []
        ),
      }))
    );
  });
  eleventyConfig.addFilter("stripMath", stripMath);
  eleventyConfig.addFilter("symbolText", symbolText);

  // JSON consumed by js/weyl.js: the current gate plus every two-qubit gate
  // with fixed Weyl coordinates (drawn as landmarks in the chamber).
  eleventyConfig.addFilter("weylData", function (gates, slug) {
    const url = eleventyConfig.getFilter("url");
    const current = gates.find((g) => g.fileSlug === slug);
    if (!current || !current.data.weyl) return "null";

    const fixedCoords = (w) => {
      if (Array.isArray(w)) return w;
      return w && w.coords && !w.params ? w.coords : null;
    };
    const describe = (g) => ({
      slug: g.fileSlug,
      title: stripMath(g.data.title),
      label: (g.data.weyl && g.data.weyl.label) || symbolText(g.data.symbol),
      url: url(g.url),
    });

    const landmarks = gates.flatMap((g) => {
      const coords = fixedCoords(g.data.weyl);
      const qubitGate = g.data.arity === 2 && (!g.data.dimension || g.data.dimension === 2);
      return coords && qubitGate ? [{ ...describe(g), coords }] : [];
    });
    const identity = gates.find((g) => g.fileSlug === "identity");

    return JSON.stringify({
      ...describe(current),
      weyl: current.data.weyl,
      landmarks,
      identityUrl: identity ? url(identity.url) : null,
    }).replace(/</g, "\\u003c");
  });

  // Link to a gate in Quirk (algassert.com/quirk). Front matter either lists
  // built-in Quirk gates per column (`cols`) or gives the unitary as a Quirk
  // matrix string (`matrix`, optionally behind `controls` control wires).
  eleventyConfig.addFilter("quirkUrl", function (quirk, slug, symbol) {
    if (!quirk) return null;
    let circuit;
    if (quirk.cols) {
      circuit = { cols: quirk.cols };
    } else if (quirk.matrix) {
      const id = "~" + String(slug).replace(/[^a-z0-9]/gi, "").slice(0, 12);
      const controls = Array(quirk.controls || 0).fill("•");
      circuit = {
        cols: [[...controls, id]],
        gates: [{ id, name: quirk.name || symbolText(symbol), matrix: quirk.matrix }],
      };
    } else {
      return null;
    }
    return "https://algassert.com/quirk#circuit=" + encodeURIComponent(JSON.stringify(circuit));
  });

  // First family of a gate in the periodic layout: {key, label, color} or null.
  eleventyConfig.addFilter("gateFamily", function (layout, slug) {
    for (const row of [...layout.rows, ...layout.pullout]) {
      for (const cell of row.cells) {
        if (!cell || cell.ghost) continue;
        const cellSlug = cell.slug || cell;
        if (cellSlug !== slug) continue;
        const key = (cell.fams || row.fams)[0];
        return { key, ...layout.families[key] };
      }
    }
    return null;
  });

  eleventyConfig.addPassthroughCopy("styles/base.css");
  eleventyConfig.addPassthroughCopy("styles/gate.css");
  eleventyConfig.addPassthroughCopy("styles/weyl.css");
  eleventyConfig.addPassthroughCopy("styles/home.css");
  eleventyConfig.addPassthroughCopy("js/weyl.js");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addCollection("gates", function (collectionApi) {
    return collectionApi.getFilteredByGlob("gates/*.md");
  });

  eleventyConfig.addCollection("groups", function (collectionApi) {
    return collectionApi.getFilteredByGlob("groups/*.md");
  });

  eleventyConfig.addCollection("gateAliases", function (collectionApi) {
    const gates = collectionApi.getFilteredByGlob("gates/*.md");

    return gates.flatMap((gate) => {
      const aliases = gate.data.alias || [];

      return aliases.map((alias) => ({
        alias,
        title: gate.data.title,
        url: gate.url,
      }));
    });
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "layouts",
      data: "_data",
      output: "_site",
    },
  };
};
