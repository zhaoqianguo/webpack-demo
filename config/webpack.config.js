const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname);

module.exports = {
  mode: 'development',
  entry: { index: './src/index.js', print: './src/print.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/',
  },
  // 配置source map
  devtool: 'inline-source-map',
  // 配置开发服务器
  devServer: {
    static: './dist',
  },
  // 模块系统配置
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // 插件系统配置
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
};
