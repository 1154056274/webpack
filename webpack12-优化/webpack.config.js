const path = require('path')
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {
    module:{
        rules: [
            // includes 缩小文件搜索范围
            {
              // 如果项目源码中只有 js 文件就不要写成 /\.jsx?$/，提升正则表达式性能
              test: /\.js$/,
              // babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
              use: ['babel-loader?cacheDirectory'],
              // 只对项目根目录下的 src 目录中的文件采用 babel-loader
              include: path.resolve(__dirname, 'src'),
            },
          ],
        noParse:[/jquery/],//不去解析jquery中的依赖库

    },
    resolve: {
        //缩小文件搜索范围
        // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
        // 其中 __dirname 表示当前工作目录，也就是项目根目录
        modules: [path.resolve(__dirname, 'node_modules')],
        alias:{
            'react': path.resolve(__dirname, './node_modules/react/dist/react.min.js'),
        },
        extensions: ['js'],  //['js','json']  

      },
      plugins: [
        new DefinePlugin({
          // 定义 NODE_ENV 环境变量为 production
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
      ],
}