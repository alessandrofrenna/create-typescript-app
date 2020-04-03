const shell = require("shelljs");
const path = require("path");
const { writeJSONSync } = require("fs-extra");

const { config_eslint } = require("../configurations/eslint");
const { config_jest } = require("../configurations/jest");
const { config_typescript } = require("../configurations/typescript");

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

const create_package_json = (
  file_path,
  { project_name, author, version, license, pkg_man }
) => {
  const package = require("./package");

  try {
    package.name = project_name
      .toLowerCase()
      .split(" ")
      .join("_");
    package.author = author;
    package.version = version;
    package.license = license;

    for (const key in package.scripts) {
      package.scripts[key] = package.scripts[key]
        .split("${pkg_man}")
        .join(pkg_man === "npm" ? "npm run" : pkg_man);
    }

    writeJSONSync(path.join(file_path, "package.json"), package, { spaces: 2 });
  } catch (exception) {
    throw exception;
  }
};

const setup = options => {
  const pwd = shell.pwd().stdout;

  const {
    name,
    author,
    version,
    prettier,
    project_name,
    target,
    pkg_man
  } = options;

  const app_path = path.join(pwd, name);
  const src_path = path.join(app_path, "src");
  const tests_path = path.join(app_path, "tests");
  const tsconfig_path = path.join(app_path, "tsconfig.json");

  const { export_template } = require("../templates/");

  try {
    // create the main app folder and cd to it
    create_folder(app_path, true);
    git_init();
    // create_gitignore(app_path);
    // create the main src folder
    // create_folder(src_path, false);
    // create tests folder
    // create_folder(tests_path, false);
    export_template("empty", app_path);
    create_package_json(app_path, {
      project_name,
      author,
      version,
      pkg_man
    });

    config_typescript(tsconfig_path, target);
    config_eslint(app_path, prettier);
    config_jest(app_path, prettier);
  } catch (exception) {
    throw exception;
  }
};

module.exports = {
  setup
};
