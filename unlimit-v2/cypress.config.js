const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalStudio: true,
    setupNodeEvents(on, config) {},
  },
});
