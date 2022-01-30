const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const tagify = require("cypress-tags");
require("dotenv").config();

module.exports = (on, config) => {
    const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript")
    };

    on("file:preprocessor", (file) => {
        return file.filePath.includes(".feature") ? cucumber(options)(file) : tagify(config)(file);
    });

    // cy.task allows to execute code in Node - Very powerful - Example: cy.task('getUsers')
    on("task", {
        getUsers: () => {
            return { user1: process.env.TOM, user2: process.env.JERRY };
        }
    });
};