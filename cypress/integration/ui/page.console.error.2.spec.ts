import { pagesToCheckConsoleErrors } from "../../support/testdata/pages";

describe(["@ui", "@errors", "@chrome"], "Page Console Error Check with Cypress Listener", () => {
  Cypress.on("window:before:load", (win: Cypress.AUTWindow) => {
    cy.spy(win.console, "error");
  });

  pagesToCheckConsoleErrors.forEach((page: string) => {
    it(`Webpage '${page}' should have no console errors`, () => {
      cy.visit({ url: page, failOnStatusCode: false });
    });
  });

  afterEach(() => {
    cy.window().then((win: Cypress.AUTWindow) => {
      expect(win.console.error).to.have.callCount(0);
    });
  });
});
