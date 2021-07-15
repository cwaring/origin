import { ViteSSG } from 'vite-ssg'
import { createBase } from 'ipfs-base'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'layouts-generated'
import { usePlugins } from '@/plugins'

import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  // root component
  App,
  // vue-router options with ipfs-base
  { routes, base: createBase() },
  // function to have custom setups
  (ctx) => {
    usePlugins(ctx)
  }
)
