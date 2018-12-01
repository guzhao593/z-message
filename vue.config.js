const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    entry: {
      app: './examples/main.js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('examples')
      }
    }
  }
}
