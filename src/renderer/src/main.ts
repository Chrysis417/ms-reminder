import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './configs/pinia'
import { router } from './configs/router'


createApp(App).use(pinia).use(router).mount('#app')
