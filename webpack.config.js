const path = require('path');

module.exports = {
  entry: './main/src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'main/dist/assets'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};