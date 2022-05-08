
// Import luxon Data management library 
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const path = require('path');
const purgeCssPlugin = require("eleventy-plugin-purgecss");
// const eleventyGoogleFonts = require("eleventy-google-fonts");
const helpers = require("./src/_data/helpers");
// Add Schema.org plugin
const schema = require("@quasibit/eleventy-plugin-schema");
// Add sitemap plugin
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
// Markdown-it
// let markdownIt = require("markdown-it");
// let markdownItAttrs = require('markdown-it-attrs');
// let markdownItKbd = require("markdown-it-kbd");
// let markdownItMultitable = require("markdown-it-multimd-table");
// const options = {
//   html: true, // html tag inside source
//   breaks: true, // use '\n' as <br>
//   linkify: true, // Autoconvert URL-like text to links
// };


// FULL SIZE Image plugin configuration
async function imageShortcode(src, alt) {
  let sizes = "(min-width: 1024px) 40vw, 100vw"
  let srcPrefix = `./src/`
  src = srcPrefix + src
  // console.log(`Generating image(s) from:  ${src}`)
  if(alt === undefined) {
    // Throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`)
  }
  let isKb = false ;
  if ( src.includes('kb/') ) {
    isKb = true;
  }
  // isKb = src.includes('kb/') ;
  let options = {
    widths: [384, 512, 800, 960, 1280],
    formats: ['webp', 'jpeg'],
    urlPath: isKb ? "/kb/images/" : "/images/",
    outputDir: isKb ? "./dist/kb/images/" : "./dist/images/",
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
  }
  // get metadata even the images are not fully generated
  let metadata = await Image(src, options ) 

  let lowsrc = metadata.jpeg[0]
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1]  
  let out =  `<picture>
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
  return out
}

// THUMBNAIL Image pluging configuration
async function thumbimageShortcode(src, alt) {
  let sizes = "(min-width: 1024px) 15vw, 30vw"
  let srcPrefix = `./src/`
  src = srcPrefix + src
  // console.log(`Generating thumbnail image(s) from:  ${src}`)
  if(alt === undefined) {
    // Throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`)
  }
  let isKb = false ;
  if ( src.includes('kb/') ) {
    isKb = true;
  }
  // isKb = src.includes('kb/') ;
  let options = {
    widths: [96, 192],
    formats: ['webp', 'jpeg'],
    urlPath: isKb ? "/kb/images/" : "/images/",
    outputDir: isKb ? "./dist/kb/images/" : "./dist/images/",
    /* =====
    Now we'll make sure each resulting file's name will 
    make sense to you. **This** is why you need 
    that `path` statement mentioned earlier.
    ===== */
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src)
      const name = path.basename(src, extension)
      console.log (`${name}-${width}w.${format}`)
      return `${name}-${width}w.${format}`
    }
  }
  // get metadata even the images are not fully generated
  let metadata = await Image(src, options) 
  let lowsrc = metadata.jpeg[0]
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1]  
  let out =  `<picture>
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
  return out
}


module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(UpgradeHelper);
};

// 11ty config and filters
module.exports = function (eleventyConfig) {
    // Copy `images/` to `./dist/images`
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/kb/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/webfonts/");
  // Image shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("thumbimage", thumbimageShortcode);
  eleventyConfig.addLiquidShortcode("thumbimage", thumbimageShortcode);
  eleventyConfig.addJavaScriptFunction("thumbimage", thumbimageShortcode);
  // Google Fonts plugin --> Gives and error. Back to local fonts.
  // eleventyConfig.addPlugin(eleventyGoogleFonts);

  // Add schema.org pluging shortcode
  eleventyConfig.addPlugin(schema);

  // Load PurgeCSS: remove unused CSS before build
  eleventyConfig.addPlugin(purgeCssPlugin, {
    // Optional: Specify the location of your PurgeCSS config
    config: "./src/_data/purgecss.config.js",

    // Optional: Set quiet: true to suppress terminal output
    quiet: false,
  });

  // sitemap plugin config
  eleventyConfig.addPlugin(sitemap, {
    lastModifiedProperty: "modified",
    sitemap: {
      hostname: 'https://www.6337.fr',
    },
  });

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

    // Create ISO8601 date and time filter
eleventyConfig.addFilter('iso8601', (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO()
})


     // Random Filter: With the help from google search engine
  eleventyConfig.addNunjucksFilter("shuffle", function(array) {
    return helpers.shuffle(array);
  });

  // Markdown engines
  let markdownIt = require("markdown-it");
  let markdownItAttrs = require('markdown-it-attrs');
  let markdownItKbd = require("markdown-it-kbd");
  let markdownItMultitable = require("markdown-it-multimd-table");
  let markdownItOpts = {
    html: true, // html tag inside source
    breaks: true, // use '\n' as <br>
    linkify: true, // Autoconvert URL-like text to links
  };
  const markdownEngine = markdownIt(markdownItOpts);
  markdownEngine.use(markdownItAttrs);
  markdownEngine.use(markdownItKbd);
  markdownEngine.use(markdownItMultitable,{
    multiline: true, // multimd table multiline
    rowspan: true, // multimd table 
    headerless: true, // multimd table 
  });
  eleventyConfig.setLibrary("md", markdownEngine);
    
  // Limit Filter: Copy paste from Jérôme Coupé
  eleventyConfig.addNunjucksFilter("limit", function(array, limit) {
    return array.slice(0, limit);
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