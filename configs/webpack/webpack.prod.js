const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {resolve} = require('path');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: 'all',
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {from: resolve(__dirname, '../../src/js/vendor'), to: resolve(__dirname, '../../build/js/vendor')}
    ])
  ]
});
