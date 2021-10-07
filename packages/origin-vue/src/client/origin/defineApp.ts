import { Component, ref } from 'vue'
import devalue from '@nuxt/devalue'
import { RouterOptions, ViteSSG, ViteSSGContext } from 'vite-ssg'
import { createBase } from 'ipfs-base'
interface ClientPlugin {
  name: string
  load: (ctx: ViteSSGContext) => void | Promise<void>
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
  /**
   * The root App component
   */
  App: Component
  /**
   * Generated application routes
   */
  routes: RouterOptions['routes']
}

interface OriginApp extends AppConfig {}

export function defineApp(
  appConfig: OriginApp
): (
  client?: boolean,
  routePath?: string | undefined
) => Promise<ViteSSGContext<true>> {
  // TODO: include app and routes in the package eventually
  const { App, plugins, routes, title, description, lang } = appConfig

  return ViteSSG(
    // root component
    App,
    // vue-router options with ipfs-base
    { routes, base: createBase() },
    // function to have custom setups
    (ctx) => {
      // apply default metatags
      ctx.head?.addHeadObjs(
        ref({
          title,
          description,
          meta: [
            { charset: 'UTF-8' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0'
            },
            { name: 'description', content: description },
            {
              property: 'generator',
              content: 'origin'
            }
          ],
          htmlAttrs: {
            lang
          }
        })
      )
      if (ctx.isClient) {
        ctx.head?.updateDOM()
      }

      // install client plugins
      ;(async () => {
        for (const plugin of plugins) {
          await plugin.load(ctx)
        }
      })()
    },
    {
      // use devalue for state serialization
      transformState(state) {
        return import.meta?.env?.SSR ? devalue(state) : state
      }
    }
  )
}
