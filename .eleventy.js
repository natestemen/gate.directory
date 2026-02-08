const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  const markdownItOptions = {
    html: true,
    breaks: false,
    linkify: true,
    // leftDelimiter: "{{",
    // rightDelimiter: "}}",
  };

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addFilter("markdown", (str) => markdownLib.render(str || ""));
  eleventyConfig.addFilter("stripMath", (str = "") => {
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
  });

  eleventyConfig.addPassthroughCopy("styles/base.css");
  eleventyConfig.addPassthroughCopy("styles/gate.css");
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
