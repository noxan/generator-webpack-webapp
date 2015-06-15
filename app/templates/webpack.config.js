"use strict";

module.exports = {
  entry: "./src/app.js",
  output: {
    path: "./dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
      { test: /\.tmpl\.jade$/, loader: "jade-loader" },
      { test: /index\.html\.jade$/, loader: "file-loader?name=[path][name]&context=./src!jade-html-loader" }
    ],
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "jscs-loader"
    },  {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "jshint-loader"
    }]
  }
};
