const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require("convert-excel-to-json");
const fs = require('fs');

async function setupNodeEvents(on, config) {
  config.db = {
    userName: "kavyadbadmin",
    password: "Murari@1278",
    server: "kavyadbdemo.database.windows.net",
    options: {
        database: "kavyamurari",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  

  on("file:preprocessor", preprocessor(config));
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  on('task',{
    excelToJsonconverter(filepath)
    {
      const result = excelToJson({
        source: fs.readFileSync(filepath)
      })
      return result
    }
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter', // Set reporter to mochawesome
  retries: {
    runMode: 1,
    openMode: 1,
  },
  env: {
    url: "https://rahulshettyacademy.com/",
  },
  e2e: {
    // Implementing setupNodeEvents here
    setupNodeEvents,
    specPattern: [
      "cypress/e2e/*/BDD/*.feature", // For .feature files
      "cypress/e2e/*/*.js"       // For .js files
    ]
  },
});
