const { copySync } = require("fs-extra");
const path = require("path");

module.exports = {
  export_template: (template_name, application_path) => {
    try {
      copySync(path.join(__dirname, template_name, "."), application_path);
    } catch (error) {
      console.log(error);
      throw new Error(
        "Cannot copy application template to destination folder."
      );
    }
  }
};
