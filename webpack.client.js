const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge")
const webpackBase =require('./webpack.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    new MiniCssExtractPlugin({
      filename:"css/bundle.[hash:5].css"
    }),
  ],
  module: {
    rules: [{
      test:/\.css$/i,
      use:[MiniCssExtractPlugin.loader, "css-loader"]
    }]
  }
};

module.exports = merge(webpackBase, webpackClient)
