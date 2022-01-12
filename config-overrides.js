const { override, addBabelPlugin, addBabelPreset, addWebpackResolve } = require('customize-cra');

module.exports = override(
  addBabelPreset(['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]),
  addBabelPlugin('@emotion/babel-plugin'),
  addWebpackResolve({
    fallback: {
      buffer: require.resolve('buffer'),
    },
  }),
);
