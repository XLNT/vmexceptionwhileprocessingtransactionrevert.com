import webpack from 'webpack'
import path from 'path'

export default {
  entry: path.resolve(__dirname, 'source/javascripts/main.js'),
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: 'javascripts/[name].js',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'source/javascripts'),
      path.join(__dirname, 'node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['env', {
              'targets': {
                'browsers': [
                  '>0.25%',
                  'not ie 11',
                  'not op_mini all',
                ],
              },
            }],
          ],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
}
