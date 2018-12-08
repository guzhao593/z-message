const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: process.env.NODE_ENV === 'lib' ? 'dist' : 'lib',
  productionSourceMap: false,
  css: {
    extract: false
  },
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
      filename: 'index.js',
      library: 'z-message',
      libraryTarget: 'commonjs2',
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
