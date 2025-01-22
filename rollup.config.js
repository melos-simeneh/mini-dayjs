const babel = require("@rollup/plugin-babel");
const terser = require("@rollup/plugin-terser");
const nodeResolve = require("@rollup/plugin-node-resolve").nodeResolve;

module.exports = {
  input: "src/index.js", // Your source code entry point
  output: [
    {
      file: "dist/mini-dayjs.cjs.js",
      format: "cjs", // CommonJS format for Node.js
      sourcemap: true,
    },
    {
      file: "dist/mini-dayjs.esm.js",
      format: "esm", // ES Module format for bundlers
      sourcemap: true,
    },
    {
      file: "dist/mini-dayjs.min.js",
      format: "umd", // UMD format for browser compatibility
      name: "MiniDayjs", // Global variable name for UMD build
      plugins: [terser()], // Minify the bundle
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(), // Resolve modules in node_modules
    babel({
      babelHelpers: "bundled", // Bundle Babel helpers
      presets: ["@babel/preset-env"],
    }),
  ],
};
