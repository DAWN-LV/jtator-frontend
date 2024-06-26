import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: fileURLToPath(new URL('./src/', import.meta.url)),
      },
      {
        find: /^~/,
        replacement: fileURLToPath(new URL('./node_modules/', import.meta.url)),
      },
    ],
  },
})
