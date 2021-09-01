import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  base: '', // important to be left empty to compile into relative paths
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    Vue(),
    Components({
      dts: true
    }),
    Pages(),
    Layouts()
  ],

  ssgOptions: {
    script: 'async',
    formatting: 'minify'
  },

  server: {
    fs: {
      strict: true
    }
  },

  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
    exclude: ['vue-demi']
  }
})
