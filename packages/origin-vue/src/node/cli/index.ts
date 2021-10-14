/* eslint-disable @typescript-eslint/no-var-requires */

import { spawn } from 'child_process'
import { cac } from 'cac'
import { createServer, createLogger } from 'vite'
import chalk from 'chalk'

/**
 * Origin cli vite wrapper for core app methods
 * Allows control for rendering and build steps
 */
const cli = cac('origin')
const __originVersion = require('@app-research/origin-vue/package.json').version
const __viteVersion = require('vite/package.json').version
// @ts-expect-error node global
global.__vite_start_time = Date.now()

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
    try {
      const server = await createServer()
      const info = server.config.logger.info
      await server.listen()

      info(
        chalk.cyan(`\n  origin v${__originVersion}`) +
          chalk.green(`\n  vite v${__viteVersion} dev server running at:\n`),
        {
          clear: !server.config.logger.hasWarned
        }
      )

      server.printUrls()

      // @ts-expect-error node global
      if (global.__vite_start_time) {
        // @ts-expect-error node global
        const startupDuration = Date.now() - global.__vite_start_time
        info(`\n  ${chalk.cyan(`ready in ${Math.ceil(startupDuration)}ms.`)}\n`)
      }
    } catch (e) {
      createLogger(opts.logLevel).error(
        // @ts-expect-error e is unknown
        chalk.red(`error when starting dev server:\n${e.stack}`),
        // @ts-expect-error e is unknown
        { error: e }
      )
      process.exit(1)
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
cli.version(__originVersion)
cli.parse()
