import { Given } from "cypress-cucumber-preprocessor/steps";

Given("a user authenticates", () => {
  cy.log("Steps which are run before each scenario occur here");
});
