import { ViteSSGContext } from 'vite-ssg'
export type OriginPlugin = (ctx: ViteSSGContext) => void

// temp solution until we have a system to manage plugin packages

/**
 *
 * @param ctx ViteSSGContext
 */
export const usePlugins = (ctx: ViteSSGContext): void => {
  const modules = import.meta.globEager(`./*/index.ts`)
  Object.values(modules).map((plugin) => plugin.install?.(ctx))
}
