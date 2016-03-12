'use strict';

let babel = require('babel');

module.exports = function (wallaby) {
  return {
    files: [
      'src/index.js'
    ],

    tests: [
      'src/map.spec.js'
    ],

    env: {
      type: 'node'
    },

    testFramework: 'jasmine',

    compilers: {
      'src/*.js': wallaby.compilers.babel({
        babel: babel,
        // https://babeljs.io/docs/usage/experimental/
        stage: 0,
        optional: ['es7.comprehensions', 'runtime']
      })
    }
  };
};
