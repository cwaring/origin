/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */

import { spawn } from 'child_process'
import { cac } from 'cac'
import { createServer, loadConfigFromFile, mergeConfig, build } from 'vite'

/**
 * Origin cli vite wrapper for core app methods
 * Allows control for rendering and build steps
 */
const cli = cac('origin')

cli.command('build', 'Run production build').action((opts) => {
  spawn('vite-ssg', ['build'], {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  }).on('error', function (err) {
    throw err
  })
})

cli
  .command('dev', 'Run development mode and watch project')
  .action(async (opts) => {
    const res = await loadConfigFromFile(
      { mode: 'development', command: 'serve' },
      undefined,
      process.cwd()
    )

    if (res) {
      const userConfig = await mergeConfig(res.config, {
        // any valid user config options, plus `mode` and `configFile`
        configFile: false
        // root: process.cwd()
        // server: {
        //   port: 3000
        // }
      })
      const server = await createServer(userConfig)
      await server.listen()
      server.printUrls()
    }
  })

cli
  .command('preview', 'Serve compiled project output preview')
  .option('--host [host]', `[string] specify hostname`)
  .action((opts) => {
    spawn('vite', ['preview', opts.host ? `--host` : ''], {
      stdio: 'inherit'
    }).on('error', function (err) {
      throw err
    })
  })

cli.help()
// cli.version(require('../../../package.json').version)
cli.parse()
