const path = require('path')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.config.js')

const DESTINATION = path.resolve(__dirname, './frontend/dist')

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './frontend/dist'),
    compress: true,
    host: '0.0.0.0',
    port: 9000
  },
  output: {
    path: DESTINATION,
    filename: 'js/index.js'
  },
})
