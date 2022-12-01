const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js' // 打包文件
    },
    mode: 'development',
    // devServer: {
    //   publicPath: '/dist',
    //   port: 3000,
    // },

    module: {
      rules: [{
        test: /\.js$/,
        use:{
          loader: 'set-author-loader-test',
          options: {
            sourceMap: true
          }
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'test',
      }),
    ],
  }