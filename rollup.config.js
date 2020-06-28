import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'index.js',
  plugins: [builtins()],
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'validateDDD'
  }
};
