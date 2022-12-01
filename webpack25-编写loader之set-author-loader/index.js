var loaderUtils = require('loader-utils')
var SourceNode = require('source-map').SourceNode
var SourceMapConsumer = require('source-map').SourceMapConsumer
module.exports = function (content, sourceMap) {
  var useStrictPrefix = '\'@author hushaopeng\';\n\n'
  if (this.cacheable) {
    this.cacheable()
  }
  // 获取options
//   var options = loaderUtils.getOptions(this) || {}
    var options = this.query || {}

  // 处理sourceMap
  if (options.sourceMap && sourceMap) {
    var currentRequest = loaderUtils.getCurrentRequest(this)
    var node = SourceNode.fromStringWithSourceMap(content, new SourceMapConsumer(sourceMap))
    node.prepend(useStrictPrefix)
    var result = node.toStringWithSourceMap({ file: currentRequest })
    var callback = this.async()
    callback(null, result.code, result.map.toJSON())
  }
  // 不支持sourceMap的情况
  return useStrictPrefix + content
}