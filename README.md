<img src='./projects/origin-vue-ts/src/assets/origin-logo.svg' width='128' height='128' alt='origin' />

# Origin

_The fast web3 application toolkit ⚡️_

### Quick Start
👉 Head over to [origin-playground](https://github.com/application-research/origin-playground) for an example app template.

**status: alpha warning, API & project structure will change 🐉**
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

## Included Dependencies
- VueUse Utilities [`@vueuse/core`](https://vueuse.org/)
- VueUse Head - Document <head> manager [`@vueuse/head`](https://vueuse.org/)

## Contributing
- This is a [pnpm](https://pnpm.io/) monorepo, development requires this package manager and not npm/yarn.

## Credits
- A huge thanks to all of the contributors behind [Vite](https://github.com/vitejs/vite), [Vue 3](https://github.com/vuejs/vue-next) and related projects, kudos for making it easier and more enjoyable to build next-gen internet, this wouldn't be possible without your efforts 😎
- Plus of course [IPFS](https://github.com/ipfs/go-ipfs), [Filecoin](https://github.com/filecoin-project) & [Protocol Labs](https://protocol.ai/) for setting the stage for a more open and secure decentralised web future.
---