const { setup } = require("./setup");
const { program } = require("commander");

const shell = require("shelljs");
const path = require("path");
const fs = require("fs");

const { install_packages } = require("./cli/installer");
const chalk = require("chalk");
const app_title = require("./cli/figlet");

const prompt = require("./cli");

module.exports = async () => {
  let app_name = "";

  // Showing figlet title
  app_title();

  program
    .usage("create-ts-app <name> [options]")
    .arguments("<name>")
    .option("-t, --template <template>", "select application template", "empty")
    .version(
      require("../package.json").version,
      "-v, --version",
      "output the current application's version"
    )
    .action((name) => (app_name = name));
  program.parse(process.argv);

  const app_path = path.join(shell.pwd().stdout, app_name);
  if (fs.existsSync(app_path)) {
    console.error(
      chalk.red(
        "Cannot create the application, a directory with given name already exists."
      )
    );
    process.exit(1);
  }

  const template = program.template;

  try {
    const answers = await prompt(app_name);
    answers.name = app_name;
    answers.template = template;
    setup(answers);
    install_packages(answers.pkg_man);
  } catch (error) {
    console.error(chalk.red(error));
    process.exit(1);
  }
};
