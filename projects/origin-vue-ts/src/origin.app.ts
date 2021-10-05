import { defineApp } from '@app-research/origin-vue'

// vite virtual plugins
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

// import plugins
import pinia from '@/plugins/pinia'
import mainStore from '@/plugins/pinia/mainStore'

// root comp
import App from '@/App.vue'

const routes = setupLayouts(generatedRoutes)

export const createApp = defineApp({
  lang: 'en',
  title: 'Origin App',
  description: 'Origin web3 starter',
  plugins: [pinia(), mainStore()],
  app: App,
  routes
})
