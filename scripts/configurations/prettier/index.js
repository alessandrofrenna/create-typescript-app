const shell = require("shelljs");
const path = require("path");
const installer = require("../../installer");

module.exports = {
  config_prettier: (application_path) => {
    try {
      const prettierrc_path = path.join(__dirname, ".prettierrc");
      shell.cp(prettierrc_path, application_path);
    } catch (error) {
      throw new Error(
        "Cannot copy .prettierrc file to application destination folder."
      );
    }
  },
  install_prettier: (pkg_man) => {
    // Install prettier with the preferred package manager
    const dependencies = "prettier eslint-plugin-prettier";
    try {
      // they should be dev dependencies
      installer(pkg_man, dependencies, true);
    } catch (error) {
      throw new Error("Cannot install prettier dependencies.");
    }
  }
};
