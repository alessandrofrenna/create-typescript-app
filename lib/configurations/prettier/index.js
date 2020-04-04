const shell = require("shelljs");
const path = require("path");

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
  dependencies: {
    prettier: "^2.0.2",
    "eslint-plugin-prettier": "^3.1.2"
  }
};
