const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry:{ 
      //index:'./src/index.js'
      app:'./src/index.js',
      other:'./src/print.js'
    },
    devServer: {
     contentBase: './dist'
   },
  plugins: [
      new ManifestPlugin(),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
       title: 'Output Management'
     })
  ],
  output: {
 //   filename: 'bundle.js',
    filename:'[name].js?v=[chunkhash:10]',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
       rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }] 
 }
};