import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Cypress.on("window:before:load", (win: Cypress.AUTWindow) => {
  cy.spy(win.console, "error");
});

Given("a user navigates to {string}", (url: string) => {
  cy.visit({ url, failOnStatusCode: false });
});

When("the page loads", () => {
  cy.get(".copyright").should("exist");
});

Then("no errors are written to the console log", () => {
  cy.window().then((win: Cypress.AUTWindow) => {
    expect(win.console.error).to.have.callCount(0);
  });
});
