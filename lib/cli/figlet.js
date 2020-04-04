const figlet = require("figlet");
const chalk = require("chalk");

module.exports = () => {
  console.log(
    chalk.green(figlet.textSync("Create TS App", { horizontalLayout: "full" }))
  );
};
