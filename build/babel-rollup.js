const {rollup} = require('rollup');
const {babel} = require('@rollup/plugin-babel');

const output = {
  file: undefined,
  name: undefined,
  format: 'umd',
  sourcemap: true,
  globals: undefined
}

/**
 * Babel Rollup Config 
 * @typedef {Object} BabelRollupConfig
 * @property {string|Array.<string>} exclude paths to exclude from compilation
 * @property {string} input filename including path
 * @property {Array.<string>} external 
 * @property {Object} output
 */
/**
 * let configForBsExample = {
 *  input: './src/index.js',
 *  external: ['jquery', 'popper.js'],
 *  output: {
 *    file: './dist/index.js',
 *    name: 'index',
 *    globals: { 
 *      jquery: 'jQuery', 
 *      'popper.js': 'Popper'
 *    }
 *  }
 *}
 * @param {BabelRollupConfig} config 
 * @returns Promise<RollupOutput>
 */
const build = (config) => {

  let plugins = [
    babel({
      babelHelpers: 'bundled',
      exclude: config.exclude
    })
  ];

  return rollup({
    plugins, 
    input: config.input, 
    external: config.external, 
    output: {
      ...output,
      ...config.output
    }
  }).then(bundle=>{
    return bundle.write({
      ...output,
      ...config.output
    });
  });
}

exports.rollup = build;