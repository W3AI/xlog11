module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css"); // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/images"); // Copy image files to output
  // Workaround for https://github.com/11ty/eleventy/issues/3133
  // Note that this is fixed in Node 20.8.0
  if (typeof global.MediaSourceHandle === "undefined") {
    global.MediaSourceHandle = () => {};
  }
  // Add any custom Eleventy configuration here
  return {
    dir: {
      input: "src",     // Source dir
      output: "xlog11"  // Output dir
    }
  }
}