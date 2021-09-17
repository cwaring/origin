/* eslint-disable @typescript-eslint/no-var-requires */
import { cac } from 'cac'

/**
 * Origin cli vite wrapper for core app methods
 * Allows control for rendering and build steps
 */
const cli = cac('coa')

cli
  .command('[dir]', 'build base origin-vue-ts app with defaults')
  .action((dir = 'origin-app', opts) => {
    console.log('scaffolding project to :', dir)
  })

cli.help()
cli.version('0.3')
cli.parse()
