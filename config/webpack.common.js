const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  // 优化
  optimization: {
    runtimeChunk: 'single',
    usedExports: true,
    // minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  // 指定支持编译的文件，以及路径简化识别配置
  resolve: {
    // 支持编译的入口文件
    // 为什么没有css？
    // 因为 css 被js,jsx,ts,tsx文件引用，
    // 通过 css-loader->style-loader 提取加工，这些 css 文件内容已经生成到 js 代码中了。
    // 为什么有js,jsx,ts,tsx文件?
    // 因为他们才是真正的编译入口文件，在webpack的主导下，babel只能通过babel-loader去加载编译webpack提交的js等入口文件。
    // 所以 .json .txt 其实没必要加进来，它们也有自己相应的loader
    extensions: ['.js', '.ts', '.tsx', '.json', 'txt'],
    // 路径简化识别插件
    plugins: [
      // typescript 路径识别插件，该插件会通过 tsconfig 配置生成简化的别名
      // 如 tsconfig 中 paths:{"@/*": ["src/*"]}
      // 通过该插件，代码中可使用 import {...} from '@/components/....' 这种形式。
      // 这种形式代表了 import {...} from '${root}/src/components/....'
      new TsconfigPathsPlugin({ configFile: './tsconfig.json' }),
    ],
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
      // babel-loader 会自动寻找 .babelrc，babel.config.js等文件，将配置信息merge成 babel 解析配置信息
      {
        test: /\.js$|\.ts$|\.tsx$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: '/node_modules',
      },
    ],
  },
  // 插件系统配置
  plugins: [
    new HtmlWebpackPlugin({
      template: '/public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
