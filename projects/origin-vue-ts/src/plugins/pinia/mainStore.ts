import { definePlugin } from '@app-research/origin-vue'
import pinia from './instance'
import { useMainStore } from '@/stores/main'

export default definePlugin({
  name: 'pinia-mainstore',
  load: ({ router }) => {
    // example:
    // init and use the mainStore before each route
    router.beforeEach((to, from, next) => {
      const store = useMainStore(pinia)
      store.initialize()
      next()
    })
  }
})
