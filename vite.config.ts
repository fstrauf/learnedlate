import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  
  // Performance optimizations
  build: {
    // Enable compression
    reportCompressedSize: true,
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          utils: ['@vueuse/head'],
        }
      }
    },
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  
  // Preview server configuration
  preview: {
    port: 3000,
    open: true,
  },
  
  // Development server configuration
  server: {
    port: 5173,
    open: true,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/head'],
  },
  
  // Define global constants
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
})
