// purgecss.config.js
// removed unused CSS at build time

module.exports = {
    // Content files referencing CSS classes
    content: ["./dist/**/*.html", "./dist/**/*.js" ],
  
    // CSS files to be purged in-place
    css: ["./dist/**/*.css"],
  };
