const HtmlWebPackPlugin = require("html-webpack-plugin");
const EvaWebpackPlugin = require('eva-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.css']
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new EvaWebpackPlugin({
      baseOutputPath: path.resolve(__dirname, 'src')
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};