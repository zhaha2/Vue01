// 开发阶段需要的
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 拆分配置文件，之后分别和共用config一起导出
module.exports = WebpackMerge(baseConfig, {
  devServer: {
    // 监听的文件夹
    contentBase: './dist',
    // 是否实时监听
    inline: true,
  }
})

