const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: process.env.NODE_ENV === 'lib' ? 'dist' : 'lib',
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      app: './examples/main.js'
    },
    externals: {
      'vue': 'vue'
    },
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
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          use: {
            loader: 'babel-loader'
          },
          exclude: /node_modules/
        },
        { test: /\.vue$/, loader: 'vue-loader' },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              'css-loader',
              'sass-loader',
              'postcss-loader'
            ],
            fallback: 'vue-style-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('index.css')
    ]
  }
}
