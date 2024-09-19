const { config } = require('@swc/core/spack');
const path = require('path');

module.exports = config({
    // starting point
    entry: {
        main: path.join(__dirname, 'src', 'main.ts'),
    },
    // output file
    output: {
        path: path.join(__dirname, 'dist'),
        name: '[name].cjs',
    },
    module: {},
});
