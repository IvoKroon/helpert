const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const buildDirectoryName = './dist';

const moduleObj = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader',
    },
  ],
};

const client = {
  mode: 'none',
  entry: {
    client: './src/index.js',
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: buildDirectoryName,
    publicPath: '/',
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    stats: 'minimal',
    open: true,
  },

  module: moduleObj,
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true,
    // }),
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      favicon: 'src/icon/favicon-16x16.png',
    }),
  ],
};

module.exports = [client];
