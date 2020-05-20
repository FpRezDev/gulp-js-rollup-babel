const bootstrapConfig = {
  input: './test/bootstrap.js',
  external: ['jquery', 'popper.js'],
  output: {
    file: './test-output/bootstrap.js',
    name: 'index',
    format: 'umd',
    sourcemap: true,
    globals: { 
      jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
      'popper.js': 'Popper'
    }
  }
};
exports.bootstrapConfig = bootstrapConfig;