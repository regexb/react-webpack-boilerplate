/**
 * Webpack Configuration
 * http://webpack.github.io/docs/configuration.html
 */
var path = require('path');
var webpack = require('webpack');

var AUTOPREFIXER_BROWSERS = ['last 2 version'];

module.exports = {
  // Entry point(s) for the bundle
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index.js'
  ],

  output: {
    path: '/',
    filename: 'app.js'
  },

  // Loaders
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.(css|styl)$/,
        loader: 'style!' +
                'css!' +
                'autoprefixer?{browsers:' + JSON.stringify(AUTOPREFIXER_BROWSERS) + '}!' +
                'stylus'
      },
      {
        test: /\.(gif|png|jpg|svg|eot|woff2|ttf|woff)(\?|$)/,
        loader: 'url?limit=8192'
      }
    ]
  },

  // Path resolving, aliases
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles')
    }
  },

  // Dev server configuration
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: 'localhost',
    port: process.env.PORT || 3000,
    contentBase: './src'
  },

  // Plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // General configuration
  debug: true,
  devtool: 'eval'
};
