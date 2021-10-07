import { defineConfig, origin } from '@app-research/origin-vue/vite'
import inspect from 'vite-plugin-inspect'

// extend or modify the default origin vite config
// https://vitejs.dev/config/

// TODO: docs on origin plugin

export default defineConfig({
  plugins: [origin(), inspect()]
})
