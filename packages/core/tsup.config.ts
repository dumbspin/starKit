import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    cli: 'src/cli.ts'
  },
  format: ['cjs', 'esm'],
  dts: true, // Generate type declarations
  treeshake: true, // Remove unused code
  sourcemap: true,
  minify: true, // Minify the bundle for production
  clean: true, // Clean the dist folder before building
  external: ['react', 'react-dom'], // Don't bundle React
  injectStyle: false, // Don't inject styles into JS, let tsup emit index.css
});
