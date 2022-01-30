# Cypress  | The Leader In Test Automation

This repository aims to demonstrate some features of the Cypress Automation Tool

## Installation

- Clone the repository. Install node.js. If Cypress is not cached locally, the download may take some time. 

```bash
cd ./cypress-demo-jan-2022
npm install
```

## Usage

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

## Usage Docker

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

## Built With
This section lists features/frameworks/libraries used within project. 

* [Cypress](https://cypress.io/) Fast, easy and reliable testing for anything that runs in a browser.
* [Typescript](https://docs.cypress.io/guides/tooling/typescript-support) TypeScript is JavaScript with syntax for types.
* [Cucumber](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) The cypress-cucumber-preprocessor adds support for using feature files.
* [Reporting ](https://www.npmjs.com/package/mochawesome) Mochawesome is a custom reporter for use with the Javascript testing framework.
* [Console Error](https://www.npmjs.com/package/cypress-fail-on-console-error) Automatically fail tests as soon as the error function is executed.
* [Tags](https://www.npmjs.com/package/cypress-tags) Custom tags to slice up Cypress test runs.

## Test Format
* Cucumber/gherkin-syntaxed specs
* Mocha style specs
