const {rollup} = require('rollup');
const {babel} = require('@rollup/plugin-babel');

/**
 * Babel Rollup Config 
 * @param {Object} config
 * @param {string|Array.<string>} config.exclude Paths to exclude from compilation
 * @param {string} config.input Filename including path
 * @param {Array.<string>} config.external External libraries
 * @param { Object } config.output Rollup output options
 * @param { string } config.output.file Output filename including path
 * @param { string } config.output.format umd | preferred format
 * @param { boolean } config.output.sourcemap whether or not to include sourcemaps
 * @param { object } config.output.globals global libraries, {key: value}
 *
 **/
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
    output: config.output
  }).then(bundle=>{
    return bundle.write(config.output);
  });
}

exports.rollup = build;