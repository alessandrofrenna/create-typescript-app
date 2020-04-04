const inquirer = require("inquirer");

const {
  project,
  version,
  author,
  pkg_man,
  ecma_version,
  prettier,
  license,
} = require("../prompts");

module.exports = (name) => {
  return inquirer.prompt([
    project(name),
    version,
    author,
    license,
    ecma_version,
    pkg_man,
    prettier,
  ]);
};
