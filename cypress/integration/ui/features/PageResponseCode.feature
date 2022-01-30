Feature: Response Code Tests

  As a user, I want to verify the response code from the pages (200, 302, 404, etc.).

  Background:
    Given a user authenticates

  @ui @dev @responseCode
  Scenario Outline: Verify the response code from the page
    Given a user navigates to "<url>"
    When the page loads
    Then the response code is "<responseCodeExpected>"

  Examples:
  | url                                                  | responseCodeExpected  |
  | https://www.w3.org/standards/badpage                 | 404                   |
  | https://www.w3.org/standards/webofdevices/multimodal | 200                   |
  | https://www.w3.org/standards/webdesign/htmlcss       | 200                   |