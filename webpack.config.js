/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-05-25 17:52:13
 * @LastEditros: 
 * @LastEditTime: 2021-05-25 23:05:51
 */

'use strict';

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')


module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    })
  ],

  mode: 'production',
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
  }
}