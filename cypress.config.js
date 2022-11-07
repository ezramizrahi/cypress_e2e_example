const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: 'https://ebay.com.au'
    },
    video: false,
    numTestsKeptInMemory: 1,
    chromeWebSecurity: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'public',
      overwrite: true,
      html: false,
      json: true
    }
  },
});
