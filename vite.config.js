import { defineConfig } from 'vite'

export default defineConfig({
  base: '/eHealth4ChildTB/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure all assets are properly referenced
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Enable asset handling
  publicDir: 'public',
})
