import { createApp } from 'vue'
import App from './App.vue'
import '../css/styles.css'
import '../node_modules/animate.css/animate.min.css'
import { router } from './router.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
