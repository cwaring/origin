<img src='./src/assets/origin-logo.svg' width='128' height='128' alt='origin' />

# Origin

_The fast web3 application toolkit ⚡️_


[![node compatility](https://img.shields.io/node/v/vite.svg)](https://nodejs.org/en/about/releases/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

***status: WIP alpha warning 🐉***
## Motivation
Building modern web3 applications should be simple, elegant and fast, **Origin** is an attempt to solve that problem with a focus to promote best practices in a lightweight, opinionated base configuration.

Origin builds upon [Vite 2](https://vitejs.dev/) defaults with [Vue 3](https://v3.vuejs.org/) and [Typescript](https://www.typescriptlang.org/), resulting in ESmodules served directly to the browser and < 300ms hot reloading time with preservation of application state between updates.

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
- ESLint & Prettier ([`.eslintrc.js`](.eslintrc.js))
- i18n @TODO
- SSR @TODO

## Testing
- Jest (unit) @TODO
- Cypress (e2e) @TODO

## Plugins
- Distributed identity provider @TODO
- Offline first database @TODO
- Vuex store with modules @TODO
- Markdown pages/imports @TODO
- Tailwind 2.x @TODO
- PWA @TODO

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

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
