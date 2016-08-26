const fs = require('fs');
const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'app/server.js'),

  output: {
    filename: 'server.bundle.js'
  },

  target: 'node',

  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    // {
    //   test: /\.html$/,
    //   exclude: /node_modules/,
    //   loader: 'html-loader'
    // },
    {
      test: /\.less/,
      loader: 'ignore-loader'
    }]
  }
};
