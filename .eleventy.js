
// Import luxon Data management library 
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const path = require('path');

// Image pluging configuration
async function imageShortcode(src, alt) {
  let sizes = "(min-width: 1024px) 75vw, 100vw"
  let srcPrefix = `./src/`
  src = srcPrefix + src
  console.log(`Generating image(s) from:  ${src}`)
  if(alt === undefined) {
    // Throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`)
  }  
  let metadata = await Image(src, {
    widths: [320, 384, 512, 683, 800, 960],
    formats: ['webp', 'jpeg'],
    urlPath: "images/",
    outputDir: "./src/images/",
    /* =====
    Now we'll make sure each resulting file's name will 
    make sense to you. **This** is why you need 
    that `path` statement mentioned earlier.
    ===== */
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src)
      const name = path.basename(src, extension)
      return `${name}-${width}w.${format}`
    }
  })  
  let lowsrc = metadata.jpeg[0]
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1]  
  return `<picture>
    ${Object.values(metadata).map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`
    }).join("\n")}
    <img
      src="${lowsrc.url}"
      width="${highsrc.width}"
      height="${highsrc.height}"
      alt="${alt}"
      loading="lazy"
      decoding="async">
  </picture>`
}

// 11ty config and filters
module.exports = function (eleventyConfig) {


    // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/webfonts/");
  // Image shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);


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