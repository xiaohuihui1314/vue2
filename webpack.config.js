// nodejs 中的path模块
const path = require('path'),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, './src/index.js')
    ],
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, './output/static'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue','.css'],
        // 你使用哪个版本的Vue？如果是Vue 2.1.0或更高版本，请查看此答案：
        // 可能您正在使用vue.js文件而不是vue.common.js文件。
        // 为了直接使用，您应该使用vue.js开发和vue.min.js生产。这两个文件分别将环境硬编码为“开发”和“生产”。
        // 对于WebPack，您应该使用该vue.common.js文件，因为它将处理该process.env.NODE_ENV变量。为此，将一个别名属性添加到您的webpack文件中：
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    },
    module: {

        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {test: /\.css$/, loader: 'style!css', exclude: '/node_modules/'},
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]',
                exclude: '/node_modules/'
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // 添加三个插件
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        })
    ]
}