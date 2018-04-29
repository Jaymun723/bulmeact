const path = require('path')

// Plugin
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// Constant
const rootDir = path.resolve(__dirname, '..')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: 'static/js/[name].[hash:5].js',
    path: path.resolve(rootDir, 'dist')
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: [ /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/ ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:5].[ext]'
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'json' ]
    // alias: {
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat'
    // }
  }
}
