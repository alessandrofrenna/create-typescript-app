module.exports = {
  type: "list",
  message: `Select the ecmascript version:`,
  choices: [
    "ESNext",
    "ES2020",
    "ES2019",
    "ES2018",
    "ES2017",
    "ES2016",
    "ES6",
    "ES5",
    "ES3"
  ],
  name: "ecmasctipt_target",
  default: "ES2020"
};
