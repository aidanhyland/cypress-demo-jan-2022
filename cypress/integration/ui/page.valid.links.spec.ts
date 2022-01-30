import { Timeout } from "../../support/enums/timeouts";
import { HttpMethod } from "../../support/enums/httpMethod";
import { pages } from "../../support/testdata/pages";

describe(["@ui", "@links"], "Verify Page links navigate to a non-4xx website", () => {
  pages.forEach((page) => {
    it(`All Webpage '${page.url}' links are valid & navigate to another live page`, () => {
      cy.visit(page.url, { failOnStatusCode: false });
      // ignore mailto:  a tags
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
  });
});
