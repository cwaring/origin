import { ViteSSGContext } from 'vite-ssg'
import { buildConfig } from '@/origin.config'

export type OriginPlugin = (ctx: ViteSSGContext) => void

// temp solution until we have a system to manage plugin packages

/**
 *
 * @param ctx ViteSSGContext
 */
export const usePlugins = (ctx: ViteSSGContext): void => {
  const modules = import.meta.glob(`./*/index.ts`)
  const plugins = buildConfig.plugins?.join('|') || ''

  for (const [path, plugin] of Object.entries(modules)) {
    if (path.match(new RegExp(plugins))) {
      plugin().then((i) => i.install?.(ctx))
    }
  }
}
