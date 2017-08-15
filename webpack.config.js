const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.png$/,
                use: ["file-loader"]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title:"HtmlWebpackPlugin",
            filename:"abc.html"
        })
    ]
};