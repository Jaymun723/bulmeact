const merge = require('webpack-merge')
const dev = require('./webpack.dev')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(dev, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server'
    })
  ]
})
