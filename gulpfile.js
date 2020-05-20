const { rollup } = require('./gulp-rollup-babel');
const { bootstrapConfig } = require('./rollup.bootstrap.config.js');

exports.default = () => {
  return rollup(bootstrapConfig);
};
