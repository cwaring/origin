import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// TODO: add resolver for origin.config.ts

// https://vitejs.dev/config/
export const config = defineConfig({
  base: '', // important to be left empty to compile into relative paths
  resolve: {
    alias: {
      '@/': `${resolve(process.cwd(), 'src')}/`
    }
  },
  plugins: [
    Vue(),
    Components({
      dts: true
    }),
    Pages({ pagesDir: 'src/routes' }),
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
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
    exclude: ['vue-demi']
  }
})
