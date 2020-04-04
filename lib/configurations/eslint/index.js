const shell = require("shelljs");
const path = require("path");
const { config_prettier } = require("../prettier");

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
  dependencies: {
    eslint: "^6.8.0",
    "@typescript-eslint/parser": "^2.26.0",
    "@typescript-eslint/eslint-plugin": "^2.26.0"
  }
};
