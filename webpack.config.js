const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  name: 'client',
  mode: 'production',
  entry: path.join(__dirname, 'src', 'client.js'),
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [ {
      test: /\.svelte$/,
      use: {
        loader: 'svelte-loader',
        options: {
          emitCss: true
        }
      }
    }, {
      test: /\.css$/,
      use: [ {
        loader: MiniCssExtractPlugin.loader
      }, 'css-loader?-url' ]
    } ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}