const shell = require("shelljs");
const path = require("path");
const { config_prettier, install_prettier } = require("../prettier");

const installer = require("../../installer");

module.exports = {
  config_eslint: (application_path, prettier) => {
    const eslint_ignore_path = path.join(__dirname, ".eslintignore");
    let eslintrc_path = path.join(__dirname, ".eslintrc");
    try {
      if (prettier) {
        eslintrc_path = path.join(__dirname, "with-prettier", ".eslintrc");
        config_prettier(application_path);
      }
      shell.cp(eslint_ignore_path, application_path);
      shell.cp(eslintrc_path, application_path);
    } catch (error) {
      throw new Error(
        "Cannot copy .eslintrc and .eslintignore files to application destination folder."
      );
    }
  },
  install_eslint: (pkg_man, prettier) => {
    // Install eslint with the preferred package manager
    const dependencies =
      "eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin";

    try {
      // they should be dev dependencies
      installer(pkg_man, dependencies, true);

      if (prettier) {
        install_prettier(pkg_man);
      }
    } catch (error) {
      throw new Error("Cannot install eslint depenencies.");
    }
  }
};
