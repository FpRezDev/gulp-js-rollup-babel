const { rollup } = require('./gulp-rollup-babel');
const { config } = require('./gulp-rollup-babel.config.js');

exports.default = () => {
  return rollup(config);
};
