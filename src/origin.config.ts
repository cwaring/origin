interface AppConfig {
  lang: string
  title: string
  description: string
}

interface BuildConfig {
  plugins?: string[]
}

interface OriginConfig extends AppConfig {
  buildConfig: BuildConfig
}

export const defineOriginConfig = (config: OriginConfig): OriginConfig => config

const omit = <T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> => {
  const clone = { ...obj }
  for (const key of keys) {
    delete clone[key]
  }
  return clone
}

const appConfig = defineOriginConfig({
  lang: 'en',
  title: 'Origin App',
  description: 'Origin web3 starter',
  buildConfig: {
    plugins: ['pinia']
  }
})

export const config = omit(appConfig, 'buildConfig')
export const buildConfig = appConfig.buildConfig
