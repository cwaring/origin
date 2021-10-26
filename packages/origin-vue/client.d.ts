declare module 'virtual:origin-app' {
  import type { RouteRecordRaw } from 'vue-router'
  import type { Component } from 'vue'
  const routes: RouteRecordRaw[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const App: DefineComponent<{}, {}, any>
  export { App, routes }
}
