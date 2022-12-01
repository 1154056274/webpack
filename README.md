# webpack
深入浅出webpack
https://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-11%E6%8F%90%E5%8F%96%E5%85%AC%E5%85%B1%E4%BB%A3%E7%A0%81.html

## Entry
入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
## Module
模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。   
include/exclude
## Chunk
代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
## Loader
模块转换器，用于把模块原内容按照需求转换成新内容。
## Plugin
扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
## Output
输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。



## resolve 别名配置
resolve:{
  alias:{
    components: './src/components/'
  },
  extensions: ['.js', '.json']  没带后缀去尝试

}
## devserver
hot 模块热替换
inline
port
open
proxy
'/api': {
        target: 'http://localhost:3000', 
        pathRewrite: {"/api" : ""}, // 后台在转接的时候url中是没有 /api 的
        changeOrigin: true, // 加了这个属性，那后端收到的请求头中的host是目标地址 target
        secure: false, // 若代理的地址是https协议，需要配置这个属性

      },


## devtool
devtool: 'source-map'



