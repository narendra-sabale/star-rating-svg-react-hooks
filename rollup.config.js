import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only'
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.js',
  output: [{
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    }
  ],
  external: ['react'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    css({ output: 'dist/bundle.css' }),
    terser()
  ]
};