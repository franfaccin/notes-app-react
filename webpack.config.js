const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath : '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader'
          },
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
