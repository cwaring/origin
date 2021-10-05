import { defineConfig, omit } from '@app-research/origin-vue'
// import plugins
import pinia from '@/plugins/pinia'
import mainStore from '@/plugins/pinia/mainStore'

/**
 * Origin global config options
 */
const config = defineConfig({
  lang: 'en',
  title: 'Origin App',
  description: 'Origin web3 starter',
  plugins: [pinia(), mainStore()],
  buildConfig: {}
})

// default export all config
export default config
// only app config
export const appConfig = omit(config, 'buildConfig')
// only build config
export const buildConfig = config.buildConfig
