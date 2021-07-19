<img src='./src/assets/origin-logo.svg' width='128' height='128' alt='origin' />

# Origin

_The fast web3 application toolkit ⚡️_


[![node compatility](https://img.shields.io/node/v/vite.svg)](https://nodejs.org/en/about/releases/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

***status: WIP alpha warning 🐉***
## Motivation
Building modern web3 applications should be simple, elegant and fast. **Origin** is an attempt to solve that problem with a focus to promote best practices in a lightweight, opinionated base configuration.

Origin builds upon [Vite 2](https://vitejs.dev/) defaults with [Vue 3](https://v3.vuejs.org/) and [Typescript](https://www.typescriptlang.org/), resulting in ESmodules served directly to the browser during development and < 100ms hot reloading time with preservation of application state between updates.

The production build uses [rollup](https://rollupjs.org/guide/en/) to generate an optimized output with relative paths so the compiled application will load via both root and subpath domains, suitable for deploying to [IPFS](https://ipfs.io/) and loading natively on the decentralized web.

We will extend the [vite/rollup plugin architecture](https://vitejs.dev/guide/api-plugin.html) to provide a selection of essential web3 tools/apis for the purpose of plug and play integration with web3 wallets, storage, distributed identity along with other general ui/design productivity frameworks.

## Core Features 
- [Vite 2.x](https://vitejs.dev/) with [Vue 3](https://v3.vuejs.org/) & [Typescript](https://www.typescriptlang.org/)
- Auto component importing ([`vite-plugin-components`](https://github.com/antfu/vite-plugin-components))
- File based routing ([`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages))
- Layout sub-system ([`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts))
- PostCSS ([`postcss.config.js`](https://vitejs.dev/guide/features.html#postcss))
  - [`postcss-modules`](https://github.com/madyankin/postcss-modules)
  - [`postcss-nested`](https://github.com/postcss/postcss-nested)
  - [`autoprefixer`](https://github.com/postcss/autoprefixer)
- IPFS Base (auto gateway detection) [`ipfs-base`](https://github.com/cwaring/ipfs-base)
- ESLint & Prettier ([`.eslintrc.js`](.eslintrc.js))
- Server Side Page Generation [`vite-ssg`](https://github.com/antfu/vite-ssg)
  - Metadata rendering with [`@vueuse/head`](https://github.com/vueuse/head)
- i18n //TODO
- Markdown pages/imports //TODO

## Testing
- [Playwright](https://playwright.dev/) (e2e) //TODO

## Vue Plugins
- pinia store with modules (WIP) [`origin-plugin-pinia`](./src/plugins/origin-plugin-pinia/)
- Distributed identity provider //TODO [#6](https://github.com/application-research/origin/issues/6)
- Offline first database //TODO
## Vite Plugins
- Tailwind 2.x //TODO

---

## Development

```bash
# 0: install deps
npm i
# 1: start development mode
npm run dev
```

```bash
# production build /dist
npm run build
```

```bash
# preview production build /dist
npm run serve
```
### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

This combo enables IDE support for [`<script setup>`](https://github.com/vuejs/rfcs/pull/227) which is included in Vue v3.1.4. However, be sure to disable Vetur if you have it installed as these extensions conflict.

### Type Support For `.vue` Imports in TS

If you are using Volar the default configuration included in Origin enables prop types for `.vue` imports. You can toggle this by selecting `Volar: Switch TS Plugin on/off` from the VSCode command palette.