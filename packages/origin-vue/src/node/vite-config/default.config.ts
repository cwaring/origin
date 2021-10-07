import { resolve } from 'path'
import { defineConfig, Plugin } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// enable default plugins
const plugins = [
  Vue(),
  Components({
    dts: true
  }),
  Pages({ pagesDir: 'src/routes' }),
  Layouts()
]

interface OriginPluginOptions {}

// https://vitejs.dev/config/
export function origin(options: OriginPluginOptions = {}): Plugin[] {
  return [
    {
      name: 'origin:config',
      config() {
        return {
          base: '', // left empty to compile into relative paths
          resolve: {
            alias: {
              '@/': `${resolve(process.cwd(), 'src')}/`
            }
          },
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
        }
      }
    },
    ...plugins
  ]
}

// expose vite defineConfig helper
export { defineConfig }
