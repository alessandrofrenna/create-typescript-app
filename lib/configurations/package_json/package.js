module.exports = {
  name: "${name}",
  version: "${version}",
  description: "Application created with Create TypeScript Application",
  repository: {
    type: "git",
    url: ""
  },
  author: "${author}",
  license: "${license}",
  devDependencies: {
    dotenv: "^8.0.2",
    nodemon: "^2.0.2",
    "@types/concurrently": "^5.1.0",
    concurrently: "^5.1.0"
  },
  scripts: {
    start: "${pkg_man} serve",
    build: "${pkg_man} build-ts && ${pkg_man} lint",
    serve: "node dist/index.js",
    "watch-node":
      "node -r dotenv/config node_modules/nodemon/bin/nodemon.js dist/index.js",
    watch:
      'concurrently -k -p "[{name}]" -n "TypeScript,Node" -c "cyan.bold,green.bold" "${pkg_man} watch-ts" "${pkg_man} watch-node"',
    test: "jest --forceExit --coverage --verbose",
    test: "jest --forceExit --coverage --verbose",
    "build-ts": "tsc",
    "watch-ts": "tsc -w",
    lint: 'tsc --noEmit && eslint "**/*.{js,ts}" --quiet --fix',
    debug: "${pkg_man} build && ${pkg_man} watch-debug",
    "serve-debug":
      "node -r dotenv/config node_modules/nodemon/bin/nodemon.js --inspect dist/index.js",
    "watch-debug":
      'concurrently -k -p "[{name}]" -n "TypeScript,Node" -c "cyan.bold,green.bold" "${pkg_man} watch-ts" "${pkg_man} serve-debug"'
  }
};
