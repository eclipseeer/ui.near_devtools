const webpack = require('webpack');
const {
  override,
  addBabelPlugin,
  addBabelPreset,
  addWebpackResolve,
  addWebpackPlugin,
} = require('customize-cra');

module.exports = override(
  addBabelPreset(['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]),
  addBabelPlugin('@emotion/babel-plugin'),
  addWebpackResolve({
    fallback: {
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  }),
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ),
);
