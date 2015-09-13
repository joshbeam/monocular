'use strict';

module.exports = {
  context: __dirname + '/src',
  entry: {
    main: './index.js'
  },
  output: {
    path: './www/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.js(x)?$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      config: __dirname + '/config-local.js'
    }
  }
};
