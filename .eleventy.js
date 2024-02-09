module.exports = function(eleventyConfig) {

  // Instructions to recognize non-HTML files
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/main.js');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/favicon.svg');

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};