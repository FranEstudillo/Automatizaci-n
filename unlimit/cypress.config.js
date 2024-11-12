const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b7bp9c',
  e2e: {
    baseUrl: "https://odm.com.mx",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
