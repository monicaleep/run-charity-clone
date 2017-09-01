const path = require('path');

module.exports = {
  //  define entry point
  entry: './assets/js/index.js',

  // define output point
  output: {
    path: path.resolve('./assets/dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },

};
