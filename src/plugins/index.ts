import { ViteSSGContext } from 'vite-ssg'
export type OriginPlugin = (ctx: ViteSSGContext) => void

// temp solution until we have a system to manage plugin packages

/**
 *
 * @param ctx ViteSSGContext
 */
export const usePlugins = async (ctx: ViteSSGContext): void => {
  const modules = import.meta.glob(`./*/index.ts`)
  const enabled = /pina/

  const json = await import('./package.json')
  
  console.log(json.dependencies)

  for (const p of Object.keys(json.dependencies)) {
    console.log(p)
    const p2 = 'pina'
    const pkg = await import(/* @vite-ignore */`origin-plugin-${p2}`)
    console.log(pkg)
  }

  for (const [path, plugin] of Object.entries(modules)) {
    if (path.match(enabled)) {
      plugin().then((i) => i.install?.(ctx))
    }
  }
}
