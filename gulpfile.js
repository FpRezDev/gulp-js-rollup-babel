const { rollup } = require('./build/babel-rollup');

/**
 * Used bootstrap plugins to verify intended compilation
 */
const config = {
  input: './src/index.js',
  external: ['jquery', 'popper.js'],
  output: {
    file: './dist/index.js',
    name: 'index',
    globals: { 
      jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
      'popper.js': 'Popper'
    }
  }
};

exports.default = () => {
  return rollup(config);
};
