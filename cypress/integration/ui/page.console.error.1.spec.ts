import failOnConsoleError from "cypress-fail-on-console-error";
import { pagesToCheckConsoleErrors } from "../../support/testdata/pages";

describe(["@ui", "@errors", "@chrome"], "Mocha Style: Page Console Error Check with External Package", () => {
  before(() => {
    failOnConsoleError();
  });

  pagesToCheckConsoleErrors.forEach((page: string) => {
    it(`Webpage '${page}' should have no console errors`, () => {
      cy.visit({ url: page, failOnStatusCode: false });
    });
  });
});
