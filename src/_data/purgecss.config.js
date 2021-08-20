// purgecss.config.js
// removed unused CSS at build time

module.exports = {
    // Content files referencing CSS classes
    content: ["./dist/**/*.html", "./dist/**/*.js" ],
  
    // CSS files to be purged in-place
    css: ["./dist/**/*.css"],
    whitelistPatterns: [/^cs-/, /^comment-/], // Retain all classes starting with...
    whitelist: [
                'cs-title',
                'cs-post',
                'cs-avatar',
                'cs-form-root',
                'cs-body',
                'cs-header',
                'cs-date',
                'cs-content',
                'cs-form',
                'cs-form-message',
                'cs-url-group',
                'cs-emailHint',
               'comment-sidecar'
               ]
  };
