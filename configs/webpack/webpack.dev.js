const merge = require('webpack-merge');
const webpack = require('webpack');
const { resolve } = require('path');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server'
  ],
  output:{
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3030,
    proxy: {
      '/collection': {
        target: 'http://localhost:3005',
        secure: false
      }
    },
    hot: true,
    contentBase: [resolve(__dirname, '../../src')]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}}
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ]
});