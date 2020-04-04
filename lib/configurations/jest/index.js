const path = require("path");
const shell = require("shelljs");

module.exports = {
  config_jest: application_path => {
    try {
      const jest_config_path = path.join(__dirname, "jest.config.js");
      shell.cp(jest_config_path, application_path);
    } catch (error) {
      throw new Error(
        "Cannot copy jest.config.js file to application destination folder."
      );
    }
  },
  dependencies: {
    jest: "^25.2.7",
    "@types/jest": "^25.1.5",
    "ts-jest": "^25.3.1",
    "eslint-plugin-jest": "^23.8.2"
  }
};
