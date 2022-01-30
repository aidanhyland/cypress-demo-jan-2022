import pagesFixture from "../../fixtures/sites.json";
import { HttpMethod } from "../../support/enums/httpMethod";
import { HttpStatus } from "../../support/enums/httpStatus";
import { pages } from "../../support/testdata/pages";

const pageArray: string[] = [
  "https://www.w3.org/standards/badpage",
  "https://www.w3.org/standards/webofdevices/multimodal",
  "https://www.w3.org/standards/webdesign/htmlcss"
];

describe(["@ui", "@responseCode"], "Mocha Style: Page Response Code Tests", () => {
  context("Page Response Code - ResponseCode 200 - Using Local Array", () => {
    pageArray.forEach((page) => {
      it(`Webpage '${page}' response code should equal 200`, () => {
        cy.request({ url: page, failOnStatusCode: false })
          .its("status")
          .should("equal", HttpStatus.Ok);
      });
    });
  });

  context("Page Response Code - Using Modules", () => {
    pages.forEach((page) => {
      it(`Webpage '${page.url}' response code should equal ${page.responseCode}`, () => {
        cy.request({ url: page.url, failOnStatusCode: false })
          .its("status")
          .should("equal", page.responseCode);
      });
    });
  });

  context("Page Response Code - Using Fixtures", () => {
    pagesFixture.forEach((page) => {
      it(`Webpage '${page.url}' response code should equal ${page.responseCode}`, () => {
        const options = { url: page.url, failOnStatusCode: false, method: HttpMethod.GET };
        cy.request({ ...options })
          .its("status")
          .should("equal", page.responseCode);
      });
    });
  });
});
