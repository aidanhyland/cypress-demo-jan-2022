Feature: BDD Style: Page Valid Links Tests

  As a user, I want to verify all links on the page go to another live (non 4xx) page.

  @ui @links
  Scenario Outline: Verify All links on the page go to another live page
    Given a user navigates to "<url>"
    When the page loads
    Then all links present on the page navigate to a live webpage

  Examples:
  | url                                                  |
  | https://www.w3.org/standards/badpage                 |
  | https://www.w3.org/standards/webofdevices/multimodal |
  | https://www.w3.org/standards/webdesign/htmlcss       |