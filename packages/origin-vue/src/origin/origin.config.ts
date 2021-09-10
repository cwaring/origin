import { ViteSSGContext } from 'vite-ssg'
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
}

interface BuildConfig {
  /**
   * String array of installed plugins that you wish to activate
   * @example ['name'] or ['origin-plugin-name']
   */
  plugins?: string[]
}

interface OriginConfig extends AppConfig {
  buildConfig: BuildConfig
}

const omit = <T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> => {
  const clone = { ...obj }
  for (const key of keys) {
    delete clone[key]
  }
  return clone
}

export const defineConfig = (config: OriginConfig): OriginConfig => config

// omit type helper
export { omit }
