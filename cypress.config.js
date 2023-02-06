const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.rentbunk.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('./cypress/plugins/index.js') (on, config)
      return config
    },
    requestTimeout: 15000,
    responseTimeout: 15000,
    defaultCommandTimeout: 15000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: true,
    specPattern: './cypress/tests/*.cy.js'
  },
});
