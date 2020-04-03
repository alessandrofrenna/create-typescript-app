const inquirer = require("inquirer");
const project = require("./scripts/cli/prompts/project");
const pkg_man = require("./scripts/cli/prompts/pkg_man");
const prettier = require("./scripts/cli/prompts/prettier");
const version = require("./scripts/cli/prompts/version");
const name = "test app".split(" ").join("_");

inquirer.prompt([project(name), pkg_man, prettier, version]).then(answers => {
  console.log(JSON.stringify(answers, null, "  "));
});
