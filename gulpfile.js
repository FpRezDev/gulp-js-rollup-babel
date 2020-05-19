const { rollup } = require('./gulp-rollup-babel');

/**
 * Used bootstrap plugins to verify intended compilation
 */
const config = {
  input: './test/index.js',
  external: ['jquery', 'popper.js'],
  output: {
    file: './test-output/index.js',
    name: 'index',
    format: 'umd',
    sourcemap: true,
    globals: { 
      jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
      'popper.js': 'Popper'
    }
  }
};

exports.default = () => {
  return rollup(config);
};
