// 生产阶段需要
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 拆分配置文件，之后分别和共用config一起导出
module.exports = WebpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ],
})

