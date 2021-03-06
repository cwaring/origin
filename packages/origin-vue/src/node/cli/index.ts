/* eslint-disable @typescript-eslint/no-var-requires */

import { spawn } from 'child_process'
import { cac } from 'cac'
import { createServer, createLogger, preview } from 'vite'
import colors from 'picocolors'

/**
 * Origin cli vite wrapper for core app methods
 * Allows control for rendering and build steps
 */
const __originVersion = require('@app-research/origin-vue/package.json').version
const __viteVersion = require('vite/package.json').version

// @ts-expect-error setup vite time global
global.__vite_start_time = Date.now()

const cli = cac('origin')

cli.option('-l, --logLevel <level>', `[string] info | warn | error | silent`)

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

      if (!server.httpServer) {
        throw new Error('HTTP server not started')
      }

      await server.listen()
      const info = server.config.logger.info

      info(
        colors.cyan(`\n  origin v${__originVersion}`) +
          colors.green(`\n  vite v${__viteVersion} dev server running at:\n`),
        {
          clear: !server.config.logger.hasWarned
        }
      )

      server.printUrls()

      // @ts-expect-error node global
      if (global.__vite_start_time) {
        // @ts-expect-error node global
        const startupDuration = Date.now() - global.__vite_start_time
        info(
          `\n  ${colors.cyan(`ready in ${Math.ceil(startupDuration)}ms.`)}\n`
        )
      }
    } catch (e) {
      createLogger(opts.logLevel).error(
        // @ts-expect-error e is unknown
        colors.red(`error when starting dev server:\n${e.stack}`),
        // @ts-expect-error e is unknown
        { error: e }
      )
      process.exit(1)
    }
  })

cli
  .command('preview', 'Serve compiled project output preview')
  .option('--host [host]', `[string] specify hostname`)
  .action(async (opts) => {
    try {
      const previewServer = await preview({
        preview: {
          port: 8080,
          open: true
        }
      })

      previewServer.printUrls()
    } catch (e) {
      createLogger(opts.logLevel).error(
        // @ts-expect-error e is unknown
        colors.red(`error when starting preview server:\n${e.stack}`),
        // @ts-expect-error e is unknown
        { error: e }
      )
      process.exit(1)
    }
  })

cli.help()
cli.version(__originVersion)
cli.parse()
