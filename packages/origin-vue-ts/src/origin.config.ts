import { defineConfig, omit } from '@app-research/origin-vue/dist/origin'

/**
 * Origin global config options
 */
const config = defineConfig({
  lang: 'en',
  title: 'Origin App',
  description: 'Origin web3 starter',
  buildConfig: {
    plugins: ['pinia']
  }
})

// default export all config
export default config
// only app config
export const appConfig = omit(config, 'buildConfig')
// only build config
export const buildConfig = config.buildConfig
