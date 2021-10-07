declare module 'virtual:origin-app' {
  import type { RouteRecordRaw } from 'vue-router'
  import type { Component } from 'vue'
  const routes: RouteRecordRaw[]
  const App: Component
  export { App, routes }
}
