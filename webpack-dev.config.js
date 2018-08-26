const path = require('path')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.config.js')

const DESTINATION = path.resolve(__dirname, './frontend/dist')

const ENV = process.env.ENV = process.env.NODE_ENV = 'development'
const API_PORT = process.env.PORT || process.env.API_PORT || 4040
const API_URL = process.env.API_URL = 'localhost'
const API_HOST = process.env.API_HOST
const METADATA = webpackMerge(commonConfig.metadata, {
    API_URL,
    API_PORT,
    ENV,
    API_HOST
})

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
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(METADATA.ENV),
            API_URL: JSON.stringify(METADATA.API_URL),
            'process.env': {
                ENV: JSON.stringify(METADATA.ENV),
                NODE_ENV: JSON.stringify(METADATA.ENV),
                API_URL: JSON.stringify(METADATA.API_URL),
                API_HOST: JSON.stringify(METADATA.API_HOST),
                API_PORT: JSON.stringify(METADATA.API_PORT)
            }
        })
    ]
})
