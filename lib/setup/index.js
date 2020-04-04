const shell = require("shelljs");
const path = require("path");

const { config_typescript } = require("../configurations/typescript");

const { config_eslint } = require("../configurations/eslint");
const { config_jest } = require("../configurations/jest");

const { export_template } = require("../templates");

const { generate_package_json } = require("../configurations/package_json");

const git_init = () => {
  if (!shell.which("git")) {
    throw new Error("Git not found, install git to continue");
  }
  try {
    shell.exec("git init > /dev/null");
  } catch (exception) {
    throw new Error("Cannot instantiate git repository, aborting.");
  }
};

const create_folder = (path, cd = false) => {
  try {
    shell.mkdir(path);

    if (cd) {
      shell.cd(path);
    }
  } catch (exception) {
    throw exception;
  }
};

const setup = (options) => {
  const pwd = shell.pwd().stdout;

  const { name, template, prettier, target, pkg_man } = options;

  const app_path = path.join(pwd, name);

  try {
    create_folder(app_path, true);
    git_init();

    config_typescript(app_path, target);
    config_eslint(app_path, prettier);
    config_jest(app_path, prettier);

    export_template(template, app_path);
    generate_package_json(app_path, options);
  } catch (exception) {
    throw exception;
  }
};

module.exports = {
  setup,
};
