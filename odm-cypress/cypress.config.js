const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://odm.com.mx/gridsistemas.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
