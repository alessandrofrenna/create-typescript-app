const confirm = require("./confirm");
const input = require("./input");
const list = require("./list");

const project = (name) =>
  input(
    "project_name",
    `Application's name:`,
    name.toLowerCase().split(" ").join("_")
  );

const version = input("version", `Application's version:`, "0.1.0");
const author = input("author", `Author's name:`, "Jon Doe");

const pkg_man = list(
  "pkg_man",
  ["yarn", "npm"],
  `Preferred package manager:`,
  "yarn"
);

const ecma_version = list(
  "target",
  [
    "ESNext",
    "ES2020",
    "ES2019",
    "ES2018",
    "ES2017",
    "ES2016",
    "ES6",
    "ES5",
    "ES3",
  ],
  `EcmaScript version:`,
  "ES2020"
);

const prettier = confirm(
  "prettier",
  `Would you want to use prettier? (Y)es|(n)o:`
);

const licenses = [
  "MIT",
  "ISC",
  "Apache-2.0",
  "GPL-2.0-or-later",
  "GPL-2.0-only",
  "GPL-3.0-or-later",
  "GPL-3.0-only",
  "AGPL-3.0-or-later",
  "AGPL-3.0-only",
  "LGPL-3.0-or-later",
  "LGPL-3.0-only",
  "CC0-1.0",
  "CC-BY-4.0",
  "CC-BY-SA-4.0",
  "MPL-2.0",
  "BSL-1.0",
  "Unlicense",
];

const license = list(
  "license",
  licenses,
  `License (you can eventually change it later)`,
  "MIT"
);

module.exports = {
  project,
  version,
  author,
  ecma_version,
  pkg_man,
  prettier,
  license,
};
