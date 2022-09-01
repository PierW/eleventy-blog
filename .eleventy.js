const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    // Importo file statici
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/assets");

    // Shortcode
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Applico filtro per data
    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };