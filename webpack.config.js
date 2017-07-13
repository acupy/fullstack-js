const path = require('path');

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
