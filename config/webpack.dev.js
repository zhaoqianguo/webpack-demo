const webpackCommon = require('./webpack.common.js');
const { merge } = require('webpack-merge');
// react-refresh
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const localUrl = '';

module.exports = merge(webpackCommon, {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$|\.ts$|\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },

  plugins: [new ReactRefreshWebpackPlugin()],

  // 配置source map
  devtool: 'inline-source-map',
  // 配置开发服务器
  devServer: {
    // 刷新时，让当前域名下的url访问 index.html
    historyApiFallback: true,
    // 热编译
    hot: true,
    // 虚拟服务器IP
    host: '0.0.0.0',
    // 虚拟服务器端口
    port: 8080,
    // 指定代理url
    proxy: {
      '/api/*': {
        target: localUrl,
        secure: false,
      },
    },
  },
});
