import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap' //js  
import "bootstrap/dist/css/bootstrap.min.css"; //css


createApp(App).use(store).use(router).mount('#app')
