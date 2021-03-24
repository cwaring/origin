import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'layouts-generated'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './App.vue'

createApp(App).use(router).mount('#app')
