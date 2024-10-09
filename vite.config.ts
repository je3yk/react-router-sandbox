import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import Pages from 'vite-plugin-pages';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '',
  plugins: [
    react(),
    tsconfigPaths(),
    Pages({exclude: ['**/components/**']}),
  ],
});
