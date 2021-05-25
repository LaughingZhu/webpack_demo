/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-05-25 17:52:13
 * @LastEditros: 
 * @LastEditTime: 2021-05-25 18:39:31
 */

'use strict';

const path = require('path')
console.log(__dirname)
module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

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
      }
    ]
  }
}