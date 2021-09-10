import { OriginPlugins } from '@app-research/origin-vue'
import { buildConfig } from '@/origin.config'

// temp solution until we have a system to manage plugin packages

export const usePlugins: OriginPlugins = (ctx) => {
  const modules = import.meta.glob(`./*/index.ts`)
  const plugins = buildConfig.plugins?.join('|') || ''

  for (const [path, plugin] of Object.entries(modules)) {
    if (path.match(new RegExp(plugins))) {
      plugin().then((i) => i.install?.(ctx))
    }
  }
}
