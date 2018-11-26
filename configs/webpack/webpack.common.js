const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./index.js', './styles/styles.scss'],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}}
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options:{
              publicPath: '/',
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html.ejs',
      filename: 'index.html'
    }),
  ],
  performance: {
    hints: false,
  },
};