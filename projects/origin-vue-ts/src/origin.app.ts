import { defineApp } from '@app-research/origin-vue'

// setup app routes with layouts
import { App, routes } from 'virtual:origin-app'

// import client side app plugins
import pinia from '@/plugins/pinia'
import mainStore from '@/plugins/pinia/mainStore'

defineApp({
  lang: 'en',
  title: 'Origin App',
  description: 'Origin web3 starter',
  App,
  routes,
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
  ]
})
