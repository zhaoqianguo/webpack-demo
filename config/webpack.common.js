const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    libraryTarget: 'umd',
    clean: true,
    publicPath: '/',
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      amd: 'lodash',
      root: '_', // 指向全局变量
    },
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
        // less处理
        test: /\.less$/i,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: [
          // 将 css-loader 提交的 css 内存文件放入 <style>...</style> 字符串中，写入引用的js文件
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]',
              },
            },
          },
          'less-loader',
        ],
      },
      // css
      {
        test: /\.css$/,
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
      // file
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      // svg
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
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
