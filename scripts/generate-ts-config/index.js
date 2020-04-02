const shell = require("shelljs");
const { writeJSONSync } = require("fs-extra");
const tsconfig = require("./tsconfig");

module.exports = (file_path, target) => {
  try {
    devDependencies = [...devDependencies, ...["reflect-metadata"]];
    tsconfig.compilerOptions.target = target;
    writeJSONSync(file_path, tsconfig, { spaces: 2 });
  } catch (exception) {
    throw exception;
  }
};
