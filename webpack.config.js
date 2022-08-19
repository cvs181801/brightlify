const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  }
  // {
  //   entry: path.resolve(__dirname, 'src', 'index.js'),
  //   output: {
  //     path: path.resolve(__dirname, 'dist'),
  //     filename: 'bundle.js'
  //   }
  // }
  
};