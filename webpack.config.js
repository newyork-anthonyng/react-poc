const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: {
    main: "./index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),

    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/template.html")
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8000
  }
};
