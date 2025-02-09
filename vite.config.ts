import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  build: {
    outDir: '../dist',
  },
  server: {
    port: 3000,
  },
});
