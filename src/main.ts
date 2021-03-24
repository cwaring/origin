import { createApp } from 'vue'
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'layouts-generated'

const routes = setupLayouts(generatedRoutes)

import App from './App.vue'

createApp(App, { routes }).mount('#app')
