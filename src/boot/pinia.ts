import { boot } from 'quasar/wrappers'
import { createPinia } from 'pinia'

export default boot(({ app }) => {
  console.log('create pinia')
  app.use(createPinia())
})
