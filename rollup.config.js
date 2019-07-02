import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/client.js',
  output: {
    sourcemap: true,
    name: 'app',
    format: 'iife',
    file: 'public/client.js'
  },
  plugins: [
    svelte({
      dev: true,
      css: css => css.write('public/style.css')
    }),
    resolve({ browser: true })
  ]
};
