const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, //清理dist文件夹
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
    // new BundleAnalyzerPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all', //公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
    },
  },

};