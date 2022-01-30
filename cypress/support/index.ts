// type definitions for Cypress object "cy"
/// <reference types="cypress" />
// type definitions for Cypress object "@testing-library/cypress"
/// <reference types="@testing-library/cypress" />
// type definitions for Cypress Tags"
/// <reference types='cypress-tags' />

import "@testing-library/cypress/add-commands";

import failOnConsoleError, { consoleType } from "cypress-fail-on-console-error";

// const config = {
//   excludeMessages: ["foo", "^some bar-regex.*"],
//   includeConsoleTypes: [consoleType.ERROR]
// };

// failOnConsoleError(config);

// excludeMessages[0] matches example console message 'this is a foo message'
// excludeMessages[1] matches example console message 'some bar-regex message'
// includeConsoleTypes observe console types ERROR, WARN and INFO
