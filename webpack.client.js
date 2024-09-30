const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge")
const webpackBase =require('./webpack.base')

const webpackClient = {
  entry: "./src/client",
  output: {
    filename: "js/client.[hash:5].js",
    path: path.resolve(__dirname, "./public"),
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!favicon.ico"],
    }),
  ],
};

module.exports = merge(webpackBase, webpackClient)
