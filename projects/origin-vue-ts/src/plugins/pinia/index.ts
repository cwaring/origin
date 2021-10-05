import { definePlugin } from '@app-research/origin-vue'
import pinia from './instance'

// type safe vue mainStore
// see: https://pinia.esm.dev/

export default definePlugin({
  name: 'pinia',
  load: ({ app, initialState }) => {
    app.use(pinia)

    if (import.meta.env.SSR) {
      // this will be stringified and set to window.__INITIAL_STATE__
      initialState.pinia = pinia.state.value
    } else {
      // on the client side, we restore the state
      pinia.state.value = initialState.pinia || {}
    }
  }
})
