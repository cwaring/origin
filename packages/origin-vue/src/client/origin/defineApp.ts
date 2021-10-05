import { Component } from 'vue'
import devalue from '@nuxt/devalue'
import { RouterOptions, ViteSSG, ViteSSGContext } from 'vite-ssg'
import { createBase } from 'ipfs-base'

// import App from './components/App.vue'

interface ClientPlugin {
  name: string
  load: (ctx: ViteSSGContext) => void
}

interface AppConfig {
  /**
   * Global HTML lang string
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang}
   */
  lang: string
  /**
   * Default application <title> tag
   */
  title: string
  /**
   * Default applcation meta description
   */
  description: string
  /**
   * Client side vue plugins
   */
  plugins: ClientPlugin[]
  app: Component
  routes: RouterOptions['routes']
}

interface OriginApp extends AppConfig {}

export function defineApp(appConfig: OriginApp) {
  // until we figure out a way to include these in the package
  const { routes, plugins, app } = appConfig

  return ViteSSG(
    // root component
    app,
    // vue-router options with ipfs-base
    { routes, base: createBase() },
    // function to have custom setups
    (ctx) => {
      for (const plugin of plugins) {
        plugin.load(ctx)
      }
    },
    {
      transformState(state) {
        return import.meta.env.SSR ? devalue(state) : state
      }
    }
  )
}
