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
              basePath: path.join(__dirname, "/"),
              maxSize: 155 // home-background-asset is 152 kb
          }
        })
      ]
    },
  })

  return config;
};
/*eslint-enable*/
