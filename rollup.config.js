var executable = require('rollup-plugin-executable')

module.exports = {
  input: 'lib/cli.js', // Entry file
  plugins: [executable()],
  output: {
    file: 'bin/generator.js',
    format: 'cjs', // Compiles to CJS
    banner: '#!/usr/bin/env node' // Adds node shebang on top of the file
  }
}