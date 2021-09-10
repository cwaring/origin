import devalue from '@nuxt/devalue'
import { ViteSSG } from 'vite-ssg'
import { createBase } from 'ipfs-base'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import App from './App.vue'
import config from '@/origin.config'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  // root component
  App,
  // vue-router options with ipfs-base
  { routes, base: createBase() },
  // function to have custom setups
  (ctx) => {
    for (const plugin of config.plugins) {
      plugin.load(ctx)
    }
  },
  {
    transformState(state) {
      return import.meta.env.SSR ? devalue(state) : state
    }
  }
)
