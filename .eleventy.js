
// Import luxon Data management library 
const { DateTime } = require("luxon");

// 11ty config and filters
module.exports = function (eleventyConfig) {


    // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/webfonts/");

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Remove the first `n` elements of a collection.
  eleventyConfig.addFilter("headoff", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(0, array.length + n);
    }

    return array.slice(0, n);
  });


    // Create readable and standard date and time
  eleventyConfig.addFilter("readablePostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "Europe/Amsterdam",
    }).setLocale('fr').toLocaleString(DateTime.DATE_FULL);
});

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