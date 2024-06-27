import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './configs/pinia'
import router from './router'
import Utils from './utils/Utils'
const app = createApp(App)

app.use(pinia)
app.use(router)
app.configs.globalProperties.utils = Utils
app.mount('#app')
