const path = require("path");
const shell = require("shelljs");

module.exports = application_path => {
  devDependencies = [...devDependencies, ...["jest", "@types/jest", "ts-jest"]];
  const jest_config_path = path.join(__dirname, "jest.config.js");
  shell.cp(jest_config_path, application_path);
};
