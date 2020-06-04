const HtmlWebpackPlugin = require('html-webpack-plugin');

const Config = {

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.ts(x*)$/,
        loader: 'ts-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]

};

module.exports = Config;
