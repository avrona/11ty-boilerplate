module.exports = function (eleventyConfig) {


    // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/webfonts/");


    return {
markdownTemplateEngine: 'njk',
dataTemplateEngine: 'njk',
htmlTemplateEngine: 'njk',
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };