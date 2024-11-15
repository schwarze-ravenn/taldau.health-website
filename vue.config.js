// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: []
// })

const webpack = require('webpack');
// const vue = require('eslint-plugin-vue');

  module.exports = {
  transpileDependencies: [],
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm-bundler.js'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true),
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false),
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(true)
        // '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
      })
    ]
  },
  // configureWebpack: {
  //   resolve: {
  //     fallback: {
  //       url: require.resolve('url/'),
  //       os: require.resolve('os-browserify/browser'),
  //       stream: require.resolve('stream-browserify'),
  //       assert: require.resolve('assert'),
  //       async_hooks: require.resolve('async_hooks'),
  //     },
  //   },
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       process: 'process/browser',
  //       Buffer: ['buffer', 'Buffer'],
  //     }),
  //   ],
  // },
};