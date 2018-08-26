const path = require('path')

const ROOT = path.resolve(__dirname, 'frontend')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                }),
            },

            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },

            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader?outputPath=fonts/'
            },

            {
                test: /.html$/,
                exclude: /index.html$/,
                use: 'html-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngularJS - Webpack',
            template: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin('css/style.css')
    ],

    entry: './index.js'
}
