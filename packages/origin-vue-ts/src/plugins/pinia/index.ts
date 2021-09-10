import { createPinia } from 'pinia'
import { OriginPlugin } from '@app-research/origin-vue'
import { useMainStore } from '@/store/main'

export const setup: OriginPlugin = ({ app, router, initialState }) => {
  const pinia = createPinia()
  app.use(pinia)

  if (import.meta.env.SSR) {
    // this will be stringified and set to window.__INITIAL_STATE__
    initialState.pinia = pinia.state.value
  } else {
    // on the client side, we restore the state
    pinia.state.value = initialState?.pinia || {}
  }

  router.beforeEach((to, from, next) => {
    const store = useMainStore(pinia)
    store.initialize()
    next()
  })
}

const plugin = (options = {}) => ({
  name: 'origin-pina',
  load: setup
})

export default plugin
