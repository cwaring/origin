import { defineStore } from 'pinia'

interface MainState {
  user: Record<string, number | string> | null
}

export const useMainStore = defineStore({
  id: 'main',
  state: (): MainState => ({
    user: null
  }),
  getters: {
    isReady(state) {
      return !!state.user
    }
  },
  actions: {
    initialize() {
      if (this.isReady) return

      console.log('Initialize user ...')
      this.user = {
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe'
      }
    }
  }
})
