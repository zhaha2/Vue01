// node语句 导入node全局的'path'包
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

// 映射webpack输出地址
// 注意是exports有个s
module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取的路径,不然每次都要打绝对路径
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // 加上下面以后，以后凡是涉及url的东西都会在前面加上这个前缀
    // 开发阶段要写，将来放到服务器上,index.html放在dist/里时就不用他了要删掉
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      // css-loader, style-loader
      {
      // 匹配css文件
      test: /\.css$/,
      // css-loader只负责将css文件加载，不负责解析，也不负责把css放如html中
      // style-loader负责将样式添加到DOM中。
      // style-loader要在css-loader前面，因为使用多个loader时从右向左读
      use: ['style-loader', 'css-loader']
      },
      // less-loader
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      // 文件
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时，会将图片编译成base64字符串形式
              // 大于limit时，则使用file-loader模块加载，用32位哈希重命名复制到dist/里。
              // 一般都用默认值8196
              limit: 88800,
              // 手动重命名复制，不用自动的哈希值。保留8位哈希
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      // babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      // Vue
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // 别名
    alias: {
      // 以后improt vue时都指向后面的文件 否则vue中不能有template
      'vue$': 'vue/dist/vue.esm.js'
    },
    // 可省略如下后缀
    extensions: ['.js', '.css', '.vue'],
  },
  // 插件
  plugins: [
    // 版权声明插件
    new webpack.BannerPlugin('最终版权归zha所有'),

    // 1)自动根据模板在dist生成index.html
    // 2)自动将打包的js文件通过script标签插入body中
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    // 压缩bundle.js(删除空格，改名变量)不能和BannerPlugin，因为注释会被删掉
    // 开发阶段最好不用
    // new UglifyjsWebpackPlugin()
  ],
  // webpack-dev-server配置
  // 基于node，使用express框架的本地服务器，可以实时刷新修改的结果
  // 编译阶段不需要
  // devServer: {
  //   // 监听的文件夹
  //   contentBase: './dist',
  //   // 是否实时监听
  //   inline: true,
  // }
}

