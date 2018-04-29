const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

// Plugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Contsant
const rootDir = path.resolve(__dirname, '..')

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: [/\.scss$/, /\.sass$/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',

          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                // modules: true,
                // importLoaders: 1,
                // camelCase: true,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  require('autoprefixer')({
                    browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                    flexbox: 'no-2009'
                  })
                ]
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  // resolve: {},
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(['dist'], { root: rootDir }),
    new ExtractTextPlugin({
      filename: 'static/css/[name].[hash:5].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      xhtml: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
})
