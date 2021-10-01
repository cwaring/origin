import { ViteSSGContext } from 'vite-ssg'

type OriginPluginFn = (ctx: ViteSSGContext) => void
export interface OriginPlugin {
  name: string
  load: OriginPluginFn
}
