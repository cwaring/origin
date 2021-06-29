import { createApp } from 'vue'
import { createBase } from 'ipfs-base'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'layouts-generated'

import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(createBase()),
  routes
})

createApp(App).use(router).mount('#app')
