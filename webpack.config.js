var path = require("path");
module.exports = {
  entry: {
    app: ["./app/client.js"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/js/",
    filename: "client.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
