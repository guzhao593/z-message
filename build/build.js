const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const name = 'z-message'

const config = {
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.vue']
  },
  entry: path.join(__dirname, '../src'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    library: name,
    libraryTarget: 'commonjs2'
  },
  externals: {
    'vue': 'vue'
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

module.exports = config
