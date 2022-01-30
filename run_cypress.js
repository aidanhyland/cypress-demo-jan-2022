const fse = require("fs-extra");
const cypress = require("cypress");
const marge = require("mochawesome-report-generator");
const { merge } = require("mochawesome-merge");

const browser = process.argv[2];

if (browser === undefined) {
  console.warn("Please provide a browser argument | chrome, edge, electron, firefox");
  return;
}

async function runTests() {
  await fse.remove("mochawesome-report");

  const runnerOptions = {
    browser,
    headless: true
  };

  cypress.run(runnerOptions).then(
    () => {
      generateReport();
    },
    (error) => {
      generateReport();
      console.error(error);
      process.exit(1);
    }
  );
}

function generateReport(options) {
  return merge(options).then((report) => marge.create(report, options));
}

runTests();
