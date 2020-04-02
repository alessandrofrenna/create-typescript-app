module.exports = {
  compilerOptions: {
    target: "${js_version}",
    module: "commonjs",
    sourceMap: true,
    strict: true,
    noUnusedLocals: false,
    noUnusedParameters: false,
    outDir: "dist",
    moduleResolution: "node",
    baseUrl: ".",
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    types: ["reflect-metadata", "@types/node", "@types/jest"],
    lib: ["ESNEXT"],
    newLine: "lf",
    esModuleInterop: true,
    resolveJsonModule: true
  },
  include: ["src/**/*"],
  exclude: ["node_modules", "**/*.spec.ts"]
};
