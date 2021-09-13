/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */

import { spawn } from 'child_process'
import { cac } from 'cac'

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

cli.command('dev', 'Run development mode and watch project').action((opts) => {
  spawn('vite', {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' }
  }).on('error', function (err) {
    throw err
  })
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
cli.version(require('../../../package.json').version)
cli.parse()
