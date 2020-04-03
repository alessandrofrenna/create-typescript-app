const { writeJSONSync } = require("fs-extra");
const tsconfig = require("./tsconfig");
const installer = require("../../installer");

module.exports = {
  config_typescript: (application_path, target) => {
    try {
      tsconfig.compilerOptions.target = target;
      writeJSONSync(application_path, tsconfig, { spaces: 2 });
    } catch (exception) {
      throw new Exception(
        "Cannot copy tslint.json file to application destination folder."
      );
    }
  },
  install_utils: pkg_man => {
    // Install typescript utils with the preferred package manager
    const dependencies = "ts-node reflect-metadata @types/node";
    try {
      // they should be dev dependencies
      installer(pkg_man, dependencies, true);
    } catch (error) {
      console.log(error);
      throw new Error("Cannot install typescript dependencies.");
    }
  }
};
