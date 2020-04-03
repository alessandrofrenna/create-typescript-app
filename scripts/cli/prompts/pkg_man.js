module.exports = {
  type: "list",
  message: `Select the package manager:`,
  choices: ["YARN", "NPM"],
  name: "pkg_man",
  default: "Yarn",
  filter: answ => answ.toLowerCase()
};
