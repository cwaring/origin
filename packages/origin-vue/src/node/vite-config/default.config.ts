import { resolve } from 'path'
import { defineConfig, Plugin } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

const originConfigRx = /(origin.app.ts)$/

function originApp() {
  const virtualFileId = 'virtual:origin-app'
  return {
    name: 'origin-app',
    transform(code: string, id: string) {
      if (originConfigRx.test(id)) {
        const createApp = code.replace(
          /^defineApp\(/gm,
          'export const createApp = defineApp('
        )
        return createApp
      }
    },
    resolveId(id: string) {
      if (id === virtualFileId) {
        return virtualFileId
      }
    },
    load(id: string) {
      if (id === virtualFileId) {
        const setup = `
import App from '__APP_ROOT__'

import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
const routes = setupLayouts(generatedRoutes);

export { App, routes };
`
        return setup
      }
    }
  }
}

// enable default plugins
const plugins = [
  originApp(),
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
      enforce: 'pre',
      config() {
        return {
          base: '', // left empty to compile into relative paths
          define: {
            __APP_ROOT__: '@/App.vue'
          },
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
