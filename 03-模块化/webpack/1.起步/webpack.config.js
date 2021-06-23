// node语句 导入node全局的'path'包
const path = require('path');

// 映射webpack输出地址
// 注意是exports有个s
module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取的路径,不然每次都要打绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}

