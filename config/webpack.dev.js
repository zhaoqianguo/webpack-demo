const webpackCommon = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(webpackCommon, {
  mode: 'development',

  // 配置source map
  devtool: 'inline-source-map',
  // 配置开发服务器
  devServer: {
    // 刷新时，让当前域名下的url访问 index.html
    historyApiFallback: true,
    hot: true,
  },
});
