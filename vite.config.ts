import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ command, isPreview }) => ({
  // Development stays at /; the production site uses the Pages repository path.
  base: command === 'build' || isPreview ? '/jack-island/' : '/',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 650 },
}));
