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

  eleventyConfig.addPassthroughCopy("styles/base.css");
  eleventyConfig.addPassthroughCopy("styles/gate.css");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addCollection("gates", function (collectionApi) {
    return collectionApi.getFilteredByGlob("gates/*.md");
  });

  eleventyConfig.addCollection("groups", function (collectionApi) {
    return collectionApi.getFilteredByGlob("groups/*.md");
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
