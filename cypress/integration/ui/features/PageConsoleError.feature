Feature: BDD Style: Console Error Webpage Tests
  
  As a user, I want to verify there are no console errors on page loads.

  @ui @errors @chrome
  Scenario Outline: Verify no console errors on page load
    Given a user navigates to "<url>"
    When the page loads
    Then no errors are written to the console log

  Examples:
  | url                                                  |
  | https://www.w3.org/standards/badpage                 |
  | https://www.w3.org/standards/webofdevices/multimodal |
  | https://www.w3.org/standards/webdesign/htmlcss       |
  | index.html                                           |