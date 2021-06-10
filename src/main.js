import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Vue.use(router)
//Vue.mount('#app', App)
createApp(App).use(router).use(store).mount('#app')
