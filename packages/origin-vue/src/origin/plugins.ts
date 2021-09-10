import { ViteSSGContext } from 'vite-ssg'

export type OriginPlugins = (ctx: ViteSSGContext) => void
export type OriginPlugin = (ctx: ViteSSGContext) => void
