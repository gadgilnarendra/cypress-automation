const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter:'cypress-mochawesome-reporter',
      

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/integration/examples/*.js",
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});

//cypress.config.js


