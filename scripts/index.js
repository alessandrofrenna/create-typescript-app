const { setup } = require("./generate-default-app");
const { install_jest } = require("./configurations/jest");
const { install_eslint } = require("./configurations/eslint");
const { install_utils } = require("./configurations/typescript");

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
    target: "ES2020",
    license: "MIT"
  };

  setup(options);
  install_utils(options.pkg_man);
  install_eslint(options.pkg_man, options.prettier);
  install_jest(options.pkg_man);
})();
