const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const path = require("path");

module.exports = () => {
  return {
    mode: "production",
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
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        filename: "[path][query]",
        algorithm: "gzip",
        deleteOriginalAssets: false,
      }),
    ],

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
