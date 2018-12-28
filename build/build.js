const webpack = require('webpack')
const config = require('./webpack.prod.config')

webpack(config,(err, stats) => {
  if(err || stats.hasErrors()) {
    console.error(err)
    return;
  }
  console.log(stats.toString({
    chunks:false,
    colors:true
  }))
})

