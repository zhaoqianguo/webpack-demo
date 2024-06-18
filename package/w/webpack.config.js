const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  module: {
    rules: [
      // 处理普通 CSS 文件
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // 处理 CSS Modules 文件
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
      // 处理普通 LESS 文件
      {
        test: /\.less$/i,
        exclude: /\.module\.less$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      // 处理 LESS Modules 文件
      {
        test: /\.module\.less$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|ts|tsx)$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/i,
        use: 'file-loader',
      },
      {
        test: /\.svg$/i,
        use: 'svg-url-loader',
      },
      {
        test: /\.js$|\.ts$|\.tsx$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: '/node_modules',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
