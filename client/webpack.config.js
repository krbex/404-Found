const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/App.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.js",
        title: "Gaming Gods",
      }),
      new CompressionPlugin(),
    ],

    module: {
      rules: [{}],
    },
  };
};
