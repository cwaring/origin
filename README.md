<img src='./projects/origin-vue-ts/src/assets/origin-logo.svg' width='128' height='128' alt='origin' />

# Origin

_The fast web3 application toolkit ⚡️_

### Quick Start
👉 Head over to [origin-playground](https://github.com/application-research/origin-playground) for an example app template.

**status: alpha warning 🐉**
## Motivation
Building modern web3 applications should be simple, elegant and fast. **Origin** is an attempt to solve that problem with a focus to promote best practices in a lightweight, opinionated base configuration.

Origin builds upon [Vite 2](https://vitejs.dev/) defaults with [Vue 3](https://v3.vuejs.org/) and [Typescript](https://www.typescriptlang.org/), resulting in ESmodules served directly to the browser during development and < 100ms hot reloading time with preservation of application state between updates.

The production build uses [rollup](https://rollupjs.org/guide/en/) to generate an optimized output with relative paths so the compiled application will load via both root and subpath domains, suitable for deploying to [IPFS](https://ipfs.io/) and loading natively on the decentralized web.

We will extend the [vite/rollup plugin architecture](https://vitejs.dev/guide/api-plugin.html) to provide a selection of essential web3 tools/apis for the purpose of plug and play integration with web3 wallets, storage, distributed identity along with other general ui/design productivity frameworks.

## Included Core Features 
- [Vite 2.x](https://vitejs.dev/) with [Vue 3](https://v3.vuejs.org/) & [Typescript](https://www.typescriptlang.org/)
- Auto component importing ([`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components))
- File based routing ([`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages))
- Layout sub-system ([`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts))
- IPFS Base (auto gateway detection) [`ipfs-base`](https://github.com/cwaring/ipfs-base)
- ARG ESLint config (with Prettier) ([`@app-research/eslint-config`](https://github.com/application-research/eslint-config))
- Server Side Page Generation [`vite-ssg`](https://github.com/antfu/vite-ssg)
- Metadata rendering with [`@vueuse/head`](https://github.com/vueuse/head)

## Origin Vue Plugins
- [Pinia](https://pinia.esm.dev/) store with SSG state serialization [`origin-plugin-pinia`]

## Included plugins
- VueUse utility library [`@vueuse/core`](https://vueuse.org/)
---

## Development

```bash
# 0: install deps
npm i
# 1: start development mode
npm start
```

```bash
# production build /dist
npm run build
```

```bash
# preview production build /dist
npm run serve
```
### Recommended Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Vue devtools (beta)](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

This combo enables IDE support for [`<script setup>`](https://github.com/vuejs/rfcs/pull/227) which is included in Vue > v3.1.4. However, be sure to disable Vetur if you have it installed as these extensions conflict.

### Type Support For `.vue` Imports in TS

If you are using Volar the default configuration included in Origin enables prop types for `.vue` imports. To enable Volar takeover mode you will need to follow [some additional steps](https://github.com/johnsoncodehk/volar/discussions/471).