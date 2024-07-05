import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'docs/_site',
  },
  resolve: {
    alias: {
      '@': '/docs/src',
    },
  },
});
