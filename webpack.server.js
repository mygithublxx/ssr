const  path = require("path");
const WebpackNodeExternals = require("webpack-node-externals")
const { merge } = require("webpack-merge")
const webpackBase =require('./webpack.base')

const webpackServer = {
  target: "node",
  entry: "./src/server",
  output: {
    filename: "server.js",
  },
  externals: [WebpackNodeExternals()],
};

module.exports = merge(webpackBase, webpackServer)
