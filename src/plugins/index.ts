import { ViteSSGContext } from 'vite-ssg'
export type OriginPlugin = (ctx: ViteSSGContext) => void

// temp solution until we have a system to manage plugin packages

/**
 *
 * @param ctx ViteSSGContext
 */
export const usePlugins = (ctx: ViteSSGContext): void => {
  const modules = import.meta.glob(`./*/index.ts`)
  const enabled = /origin-plugin-pina/

  for (const [path, plugin] of Object.entries(modules)) {
    if (path.match(enabled)) {
      plugin().then((i) => i.install?.(ctx))
    }
  }
}
