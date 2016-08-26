var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    client: ["./app/client.js"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "app.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html-loader'
    }, {
      test: /\.less/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
};
