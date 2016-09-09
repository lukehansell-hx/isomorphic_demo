var nodeExternals = require('webpack-node-externals')
var defaultServerConfig = require('./webpack.server.config.js')

module.exports = {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder,
  module: defaultServerConfig.module
}
