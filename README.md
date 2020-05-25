# gulp-js-rollup-babel

A Simple gulp plugin to build browsers ready js files on the fly with little setup.

Install
========

```
npm i -D gulp-js-rollup-babel
```

Usage
======

### Example

```yaml
#.browserslistrc
# Example
>= 1%
last 1 major version
not dead
Chrome >= 45
Firefox >= 38
Edge >= 12
Explorer >= 10
iOS >= 9
Safari >= 9
Android >= 4.4
Opera >= 30
```

```json
// babel.config.json
// example
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "loose": true,
        "modules": false,
        "exclude": ["transform-typeof-symbol"]
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-object-rest-spread"
  ]
}
```

```js
// gulpfile.js

const { rollup } = require('gulp-js-rollup-babel');

// Example
const jsConfig = {
  input: './test/index.js',
  external: ['jquery'],
  minimize: true,
  output: {
    file: './test-output/index.min.js',
    name: 'index',
    format: 'umd',
    sourcemap: true,
    globals: { 
      jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
    }
  }
};

exports.default = () => {
  return rollup(jsConfig);
};
```

