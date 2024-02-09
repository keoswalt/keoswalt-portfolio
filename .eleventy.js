module.exports = function(eleventyConfig) {

  // Instructions to recognize non-HTML files
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/main.js');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/favicon.svg');

  // Get the current year for site copyright

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};