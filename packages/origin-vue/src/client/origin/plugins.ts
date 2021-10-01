import { ViteSSGContext } from 'vite-ssg'

type OriginPluginFn = (ctx: ViteSSGContext) => void
export interface OriginPlugin {
  name: string
  load: OriginPluginFn
}

export const definePlugin = (pluginWrapper: OriginPlugin): OriginPlugin =>
  pluginWrapper
