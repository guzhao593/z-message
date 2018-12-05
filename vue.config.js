const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: process.env.NODE_ENV === 'lib' ? 'dist' : 'lib',
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      app: process.env.NODE_ENV === 'lib' ? './src' : './examples/main.js'
    },
    externals: process.env.NODE_ENV === 'lib'
      ? {
        'vue': 'vue'
      }
      : {},
    output: {
      filename: 'index.min.js',
      library: 'z-message',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('examples')
      }
    }
  }
}
