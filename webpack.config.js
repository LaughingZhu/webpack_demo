/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-05-25 17:52:13
 * @LastEditros: 
 * @LastEditTime: 2021-05-26 15:22:03
 */

'use strict';

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')


module.exports = {
  entry: {
    index:'./src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    library: {
      name: "webpackNumbers",
      type: 'umd'
    },
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
    // new BundleAnalyzerPlugin(
    //   {
    //     analyzerMode: 'server',
    //     analyzerHost: '127.0.0.1',
    //     analyzerPort: 8889,
    //     reportFilename: 'report.html',
    //     defaultSizes: 'parsed',
    //     openAnalyzer: true,
    //     generateStatsFile: false,
    //     statsFilename: 'stats.json',
    //     statsOptions: null,
    //     logLevel: 'info'
    //   }
    // )
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },

  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gih)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      }
    ]
  },
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
    runtimeChunk: 'single',
    moduleIds : 'deterministic',
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
}