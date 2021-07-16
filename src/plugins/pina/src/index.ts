import { createPinia } from 'pinia'

export const install: any = ({ app }) => {
  app.use(createPinia())
  console.log('🍍 pina running')
}
