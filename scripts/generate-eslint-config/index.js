const shell = require("shelljs");
const path = require("path");
const prettier_generator = require("../generate-prettier-config");

module.exports = (application_path, prettier) => {
  global.devDependencies = [
    ...global.devDependencies, 
    ...["eslint", "@typescript-eslint/parser", "@typescript-eslint/eslint-plugin"]
  ];

  const eslint_ignore_path = path.join(__dirname, ".eslintignore");
  let eslintrc_path = path.join(__dirname, ".eslintrc");


  if (prettier) {
    eslintrc_path = path.join(__dirname, "with-prettier", ".eslintrc");
    prettier_generator(application_path);
    global.devDependencies.push("prettier");
    global.devDependencies.push("eslint-plugin-prettier");
  }

  shell.cp(eslint_ignore_path, application_path);
  shell.cp(eslintrc_path, application_path);
}