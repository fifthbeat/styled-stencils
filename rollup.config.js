import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'styled',
  },
  plugins: [
    minify(),
    resolve({
      browser: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    cleanup(),
  ],
};
