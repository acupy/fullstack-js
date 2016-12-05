module.exports = {
    entry: './app/index.js',
    output: {
             path: './bin',
             filename: 'index.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
     ]
   }
};
