/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */

import { spawn } from 'child_process'
import { cac } from 'cac'

/**
 * Origin cli vite wrapper for core app methods
 * Allows control for rendering and build steps
 */
const cli = cac('origin')

cli.command('build', 'Run production build').action((args) => {
  spawn('vite-ssg', ['build'], {
    stdio: 'inherit',
    env: { NODE_ENV: 'production', ...process.env }
  }).on('error', function (err) {
    throw err
  })
})

cli.command('dev', 'Run development mode and watch project').action((args) => {
  spawn('vite', {
    stdio: 'inherit',
    env: { NODE_ENV: 'development', ...process.env }
  }).on('error', function (err) {
    throw err
  })
})

cli
  .command('preview', 'Serve compiled project output preview')
  .action((args) => {
    spawn('vite', ['preview'], {
      stdio: 'inherit',
      env: { NODE_ENV: 'pro', ...process.env }
    }).on('error', function (err) {
      throw err
    })
  })

cli.help()
cli.version(require('../../../package.json').version)
cli.parse()
