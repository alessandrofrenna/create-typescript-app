const path = require("path");
const shell = require("shelljs");
const installer = require("../../installer");

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
  install_jest: pkg_man => {
    // Install jest with the preferred package manager
    const dependencies = "jest @types/jest ts-jest eslint-plugin-jest";
    try {
      // they should be dev dependencies
      installer(pkg_man, dependencies, true);
    } catch (error) {
      throw new Error("Cannot install jest dependencies.");
    }
  }
};
