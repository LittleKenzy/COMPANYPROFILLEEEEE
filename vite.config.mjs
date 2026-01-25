import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'], // pre-bundle lucide-react
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lucide: ['lucide-react'], // separate huge library
        },
      },
    },
  },
});
