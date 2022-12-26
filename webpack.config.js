const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  console.log("输出", "env", env, "argv", argv);
  const config = {
    mode: "development",
    entry: "./src/main.js",
    output: {
      filename: "main.js",
      path: path.join(__dirname, "dist"),
    },
    plugins: [new HtmlWebpackPlugin()],
  };
  return config;
};

// module.exports = [
//   {
//     name: "development",
//     mode: "development",
//     entry: "./src/main.js",
//     output: {
//       filename: "main.js",
//       path: path.join(__dirname, "development_dist"),
//     },
//   },
//   {
//     name: "production",
//     mode: "production",
//     entry: "./src/main.js",
//     output: {
//       filename: "main.js",
//       path: path.join(__dirname, "production_dist"),
//     },
//   },
// ];
