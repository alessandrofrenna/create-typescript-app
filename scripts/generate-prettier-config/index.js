const shell = require("shelljs");
const path = require("path");

module.exports = (application_path) => {
  const prettierrc_path = path.join(__dirname, ".prettierrc");
  shell.cp(prettierrc_path, application_path);
}