var webpack = require('webpack');
let HtmlWebpackPlugin = require("html-webpack-plugin");

const {CheckerPlugin} = require('awesome-typescript-loader');

module.exports = {
    entry: './client/index.tsx',
    output: {
        path: __dirname + '../public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','autoprefixer-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader', 'awesome-typescript-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './client/index.html',
            inject: "body"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};