const shell = require("shelljs");
const { exec } = require("child_process");
const { promisify } = require("util");
const ora = require("ora");
const app_title = require("./figlet");
const clear = require("clear");
const chalk = require("chalk");

const execAsync = promisify(exec);

const install_packages = (pkg_manager) => {
  const matcher = {
    yarn: `yarn install`,
    npm: `npm install`,
  };

  if (!matcher.hasOwnProperty(pkg_manager)) {
    throw new TypeError("Package manager must be either YARN or NPM");
  }

  if (!shell.which(pkg_manager)) {
    throw new Error(`Error: ${pkg_manager} not installed`);
  }

  const command = matcher[pkg_manager];
  clear();
  app_title();

  const spinner = ora({
    text: `Installing required packages with ${pkg_manager}. Please wait...`,
    color: "green",
  }).start();

  return execAsync(command).then(() => {
    spinner.stop();
    clear();
    app_title();
    console.log(
      chalk.cyan(
        "Finished. You can now use your TypeScript application.\nEnjoy!"
      )
    );
    process.exit(0);
  });
};

module.exports = { install_packages };
