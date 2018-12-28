// const webpack = require('webpack')
// const config = require('./webpack.prod.config')

// webpack(config,(err, stats) => {
//   if(err || stats.hasErrors()) {
//     console.error(err)
//     return;
//   }
//   console.log(stats.toString({
//     chunks:false,
//     colors:true
//   }))
// })
const webpack = require('webpack');
const config = require('./webpack.prod.config.js');

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.error(err);
    return;
  }
  // 处理完成
  console.log(stats.toString({
    chunks: true,  // false使构建过程更静默无输出
    colors: true    // 在控制台展示颜色
  }));
});