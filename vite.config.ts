import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  
  // Build configuration
  build: {
    // Enable compression
    reportCompressedSize: true,
    
    // SSR manifest for prerendering (only for client build)
    ...(isSsrBuild ? {} : { ssrManifest: true }),
    
    // Rollup options - only apply manualChunks for client build
    rollupOptions: isSsrBuild ? {} : {
      input: {
        client: resolve(__dirname, 'index.html'),
      },
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
    
    // Ensure assets have consistent paths
    assetsDir: 'assets',
  },
  
  // SSR-specific options
  ssr: {
    // External packages that shouldn't be bundled in SSR
    external: ['posthog-js'],
    // Don't bundle Vue in SSR (use the external version)
    noExternal: [],
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
    proxy: {
      '/api': {
        target: 'http://localhost:3020',
        changeOrigin: true,
      },
    },
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
}))
