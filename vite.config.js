import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/copfoodrescue/',
  build: {
    rollupOptions: {
      input: 'src/main.jsx',
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/index.js',
      },
    },
  },
  plugins: [react()],
})
