const path = require("path");
const { writeJSONSync } = require("fs-extra");
const tsconfig = require("./tsconfig");

module.exports = {
  config_typescript: (application_path, target) => {
    try {
      file_path = path.join(application_path, "tsconfig.json");
      tsconfig.compilerOptions.target = target;
      writeJSONSync(file_path, tsconfig, { spaces: 2 });
    } catch (exception) {
      throw new Exception(
        "Cannot copy tslint.json file to application destination folder."
      );
    }
  },
  dependencies: {
    typescript: "3.7.5",
    "ts-node": "^8.8.1",
    "reflect-metadata": "^0.1.13",
    "@types/node": "^13.11.0"
  }
};
