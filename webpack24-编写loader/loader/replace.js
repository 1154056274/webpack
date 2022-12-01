function replace(source) {
    // replace
    // @require '../style/index.css'
    // to
    // require('../style/index.css');
    return source.replace(/(\/\/ *@require) +(('|").+('|")).*/, 'require($2);');
}

module.exports = replace;

// 使用正则把 // @require '../style/index.css' 转换成 require('../style/index.css');  
