import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { HttpMethod } from "../../../../support/enums/httpMethod";
import { Timeout } from "../../../../support/enums/timeouts";

Given("a user navigates to {string}", (url: string) => {
  cy.visit(url, { failOnStatusCode: false });
});

When("the page loads", () => {
  cy.get(".copyright").should("exist");
});

Then("all links present on the page navigate to a live webpage", () => {
  cy.get("a:not([href*='mailto:'])").each((link) => {
    if (link.prop("href")) {
      cy.request({
        url: link.prop("href"),
        method: HttpMethod.GET,
        failOnStatusCode: true,
        timeout: Timeout.VerySlow
      });
    }
  });
});
