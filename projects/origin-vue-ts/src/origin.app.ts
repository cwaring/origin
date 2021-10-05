import { defineApp } from '@app-research/origin-vue'

// import vite virtual plugins
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

// import client side app plugins
import pinia from '@/plugins/pinia'
import mainStore from '@/plugins/pinia/mainStore'

// root component
import app from '@/App.vue'

// setup app routes with layouts
const routes = setupLayouts(generatedRoutes)

export const createApp = defineApp({
  lang: 'en',
  title: 'Origin App',
  description: 'Origin web3 starter',
  plugins: [
    pinia(),
    mainStore(),
    {
      name: 'origin-example-plugin',
      load: ({
        app,
        router,
        routes,
        initialState,
        head,
        isClient,
        routePath
      }) => {
        // modify or extend the application context or install additional vue plugins
        // @see ./plugins/pinia/index.ts for an example
      }
    }
  ],
  app,
  routes
})
