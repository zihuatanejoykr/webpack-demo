const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require("webpack");
const path = require("path");


module.exports = {
    entry: {
        a:"./src/index.js",
        b:"./src/search.js",
        resource:"./src/resource.js"
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:"[name].js"
    },
    devServer: {
        contentBase: './dist'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
                /*use:ExtractTextPlugin.extract({ // 资源文件的提取
                    fallback: 'style-loader',
                    use: ['css-loader']
                })*/
            },
            {
                test: /\.(otf|ttf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(png|jpg)$/,
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
        new webpack.optimize.UglifyJsPlugin(),// 对打包出来的js做压缩处理
        new ExtractTextPlugin('[name].css'),
        /*new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),*/
        new HtmlWebpackPlugin({
            template:"src/index.html",
            filename:"abc.html",
            inject:"head",
            chunks:["a"]
        }),
        new HtmlWebpackPlugin({
            template:"src/search.html",
            filename:"search.html",
            inject:"body",
            chunks:["b"]
        }),
        new HtmlWebpackPlugin({
            template:"src/resource.html",
            filename:"resource.html",
            inject:"body",
            chunks:["resource"],
            minify:{
                minifyCSS:true
            }
        }),

    ]
};