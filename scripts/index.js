const { setup, install_package } = require("./generate-default-app");
const path = require("path");
const shell = require("shelljs");
const eslint_configurator = require("./generate-eslint-config");
const prettier_configurator = require("./generate-prettier-config");

global.devDependencies = [];
global.dependencies = [];

(() => {
  const options = {
    name: "test application",
    project_name: "test_application",
    author: "Alessandro Frenna",
    version: "0.0.0",
    prettier: true,
    pkg_man: "yarn",
    target: "ES2020"
  };

  devDependencies = ["ts-node", "eslint-plugin-jest", "@types/node"];

  setup(options);
  global.devDependencies.forEach(dep =>
    install_package(options.pkg_man, dep, true)
  );
})();
