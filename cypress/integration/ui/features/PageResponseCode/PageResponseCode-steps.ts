import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

let responseCode: number = undefined;

Given("a user navigates to {string}", (url: string) => {
  cy.request({ url, failOnStatusCode: false }).then((response) => {
    responseCode = response.status;
  });
});

When("the page loads", () => {
  return;
});

Then("the response code is {string}", (expectedCode: string) => {
  expect(responseCode).to.eql(Number(expectedCode));
});
