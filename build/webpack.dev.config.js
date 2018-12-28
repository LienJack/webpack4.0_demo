const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.config')
module.exports = merge(baseConfig,{
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // 启动服务根路径
    contentBase: path.resolve(__dirname, '../dist'),
    open: true
  }
})

