import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// for ck editor
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }) // for ckeditor
  ],
  server: {
    port: 3000
  }
});
