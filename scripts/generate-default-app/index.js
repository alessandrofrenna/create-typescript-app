const shell = require("shelljs");
const path = require("path");
const { writeJSONSync } = require("fs-extra");

const eslint_configurator = require("../generate-eslint-config");
const jest_configurator = require("../generate-jest-config");
const create_ts_config = require("../generate-ts-config");

const git_init = () => {
  if (!shell.which("git")) {
    throw new Error("Git not found, install git to continue");
  }
  try {
    shell.exec("git init");
  } catch (exception) {
    throw exception;
  }
};

const create_gitignore = file_path => {
  try {
    gitignore_src_path = path.join(__dirname, "gitignore");
    shell.cp(gitignore_src_path, path.join(file_path, ".gitignore"));
  } catch (exception) {
    throw exception;
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

const create_package_json = (file_path, { project_name, author, version }) => {
  const package = require("./package");

  try {
    package.name = project_name
      .toLowerCase()
      .split(" ")
      .join("_");
    package.author = author;
    package.version = version;

    writeJSONSync(path.join(file_path, "package.json"), package);
  } catch (exception) {
    throw exception;
  }
};

const install_package = (pkg_manager, name, dev = false) => {
  const matcher = {
    yarn: `yarn add ${name} ${dev ? "--dev" : ""}`,
    npm: `npm install ${name} ${dev ? "--save-dev" : ""}`
  };

  if (!matcher.hasOwnProperty(pkg_manager)) {
    throw new TypeError("Package manager must be either YARN or NPM");
  }

  if (!shell.which(pkg_manager)) {
    throw new Error(`Error: ${pkg_manager} not installed`);
  }

  try {
    shell.exec(matcher[pkg_manager]);
  } catch (exception) {
    throw exception;
  }
};

const setup = options => {
  const pwd = shell.pwd().stdout;

  const { name, author, version, prettier, project_name, target } = options;

  const app_path = path.join(pwd, name);
  const src_path = path.join(app_path, "src");
  const tests_path = path.join(app_path, "tests");
  const tsconfig_path = path.join(app_path, "tsconfig.json");

  try {
    // create the main app folder and cd to it
    create_folder(app_path, true);
    git_init();
    create_gitignore(app_path);
    // create the main src folder
    create_folder(src_path, false);
    // create tests folder
    create_folder(tests_path, false);

    create_package_json(app_path, {
      project_name,
      author,
      version
    });

    create_ts_config(tsconfig_path, target);

    eslint_configurator(app_path, prettier);
    jest_configurator(app_path);
  } catch (exception) {
    throw exception;
  }
};

module.exports = {
  setup,
  install_package
};
