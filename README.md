## Cypress  | The Leader In Test Automation

This repository aims to demonstrate some features of the Cypress Automation Tool

### Installation

- Install [Node.js](https://nodejs.org/en/download/). 
- If Cypress is not cached locally, the download may take some time. 

```bash
git clone https://github.com/aidanhyland/cypress-demo-jan-2022.git
cd ./cypress-demo-jan-2022
npm install
```

### Usage

```bash
# Open Cypress Runner
npm run cy:open

# Quick Run all Tests
npm run cy:run

# Run on Chrome with Reporting generated
npm run cy:chrome

# Run on Firefox with Reporting generated
npm run cy:firefox
```

### Usage Docker

- If you do not have Docker installed already, please install it from [here](https://docs.docker.com/get-docker/).
- Ensure Docker is running on your machine.

```bash
# Docker Windows
docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:9.2.0 --browser chrome
docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:9.2.0 --browser firefox

# Docker Linux
docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.2.0 --browser chrome
docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.2.0 --browser firefox

```

### Built With
This section lists features/frameworks/libraries used within project. 

* [Cypress](https://cypress.io/) Fast, easy and reliable testing for anything that runs in a browser.
* [Typescript](https://docs.cypress.io/guides/tooling/typescript-support) TypeScript is JavaScript with syntax for types.
* [Cucumber](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) The cypress-cucumber-preprocessor adds support for using feature files.
* [Console Error](https://www.npmjs.com/package/cypress-fail-on-console-error) Automatically fail tests as soon as the error function is executed.
* [Reporting ](https://www.npmjs.com/package/mochawesome) Mochawesome is a custom reporter for use with the Javascript testing framework.
* [Tags](https://www.npmjs.com/package/cypress-tags) Custom tags to slice up Cypress test runs.
* [Cypress API](https://docs.cypress.io/guides/guides/module-api#cypress-run) Cypress as a node module

### Test Format
* Cucumber/gherkin-syntaxed specs
* Mocha style specs

### Filtering by Tags
The cypress.json contains configuration for tagging tests.

```json
  "env": {
    "TAGS": "@dev",
    "CYPRESS_INCLUDE_TAGS": "@dev",
    "CYPRESS_EXCLUDE_TAGS": "",
  }
``` 
The `TAGS` property will affect all files with .feature extension. The `CYPRESS_*_TAGS` properties will affect .spec.ts extension files.

- [Spec File Tag Syntax](https://www.npmjs.com/package/cypress-tags)
- [Feature File Tag Syntax](https://github.com/cucumber/cucumber/tree/master/tag-expressions)
