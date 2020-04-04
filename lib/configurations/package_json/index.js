const path = require("path");
const { writeJSONSync } = require("fs-extra");

const ts_deps = require("../typescript").dependencies;
const eslint_deps = require("../eslint").dependencies;
const prettier_deps = require("../prettier").dependencies;
const jest_deps = require("../jest").dependencies;

const generate_package_json = (app_path, options) => {
  const file_path = path.join(app_path, "package.json");
  const { author, project_name, license, version } = options;
  const { pkg_man } = options;
  const file = require("./package");

  file.name = project_name;
  file.author = author;
  file.license = license;
  file.version = version;
  file.devDependencies = {
    ...file.devDependencies,
    ...ts_deps,
    ...eslint_deps,
    ...jest_deps
  };

  if (options.prettier) {
    file.devDependencies = {
      ...file.devDependencies,
      ...prettier_deps
    };
  }

  for (const key in file.scripts) {
    file.scripts[key] = file.scripts[key]
      .split("${pkg_man}")
      .join(pkg_man === "npm" ? "npm run" : pkg_man);
  }

  try {
    writeJSONSync(file_path, file, { spaces: 2 });
  } catch (error) {
    throw new Error("Cannot create package.json, aborting installation.");
  }
};

module.exports = { generate_package_json };
