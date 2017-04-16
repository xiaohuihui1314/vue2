const express = require('express'),
    rewrite = require('express-urlrewrite'),
    fs = require('fs'),
    path = require('path'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./webpack.config'),
// 创建一个express实例
    app = express(),
// 调用webpack并把配置传递过去
    compiler = webpack(config);

// 使用 webpack-dev-middleware 中间件
const devMiddleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        // colors: true,
        // chunks: false
    }
});
// 使用 webpack-hot-middleware 中间件
const hotMiddleware = webpackHotMiddleware(compiler);
// 注册中间件
app.use(devMiddleware);
// 注册中间件
app.use(hotMiddleware);
// 监听 8888端口，开启服务器
app.listen(8888, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:8888')
});
