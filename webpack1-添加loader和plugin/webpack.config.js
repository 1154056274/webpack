const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use:['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src') //通过include将loader应用在实际需要转化的模块
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader', ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src') //通过include将loader应用在实际需要转化的模块
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],

};