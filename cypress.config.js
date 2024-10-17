import { allureCypress } from "allure-cypress/reporter";

export default {
  e2e: {
    baseUrl:'https://bugbank.netlify.app',
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
};