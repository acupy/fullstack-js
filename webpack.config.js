module.exports = {
  entry: './app/index.jsx',
  output: {
    path: './bin',
    filename: 'index.js',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
