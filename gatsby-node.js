import cPostcss from './postcss';
/*eslint-disable*/
exports.modifyWebpackConfig = function(config, env) {
  config.merge({
    postcss (wp) {
      return [
        cPostcss({
          import: {
            extensions: ['.css'],
            addDependencyTo: wp
          },
          cssnext: { browsers: 'last 2 versions' },
          url: {
              url: "inline",
              maxSize: 155 // home-background-asset is 152 kb
          }
        })
      ]
    },
  })

  return config;
};
/*eslint-enable*/
