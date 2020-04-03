const shell = require("shelljs");

module.exports = (pkg_manager, name, dev = false) => {
  const matcher = {
    yarn: `yarn add ${name} ${dev ? "--dev" : ""} > /dev/null 2>&1`,
    npm: `npm install ${name} ${dev ? "--save-dev" : ""} >/dev/null 2>&1`
  };

  if (!matcher.hasOwnProperty(pkg_manager)) {
    throw new TypeError("Package manager must be either YARN or NPM");
  }

  if (!shell.which(pkg_manager)) {
    throw new Error(`Error: ${pkg_manager} not installed`);
  }

  try {
    shell.exec(matcher[pkg_manager]);
  } catch (exception) {
    throw exception;
  }
};
