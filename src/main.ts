import { createApp } from 'vue';
import App from './App.vue'
import * as VueRouter from 'vue-router'
import axios from 'axios'
import routes from './config/route';

const app = createApp(App);

axios.defaults.baseURL = 'http://192.168.48.131:10002'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

  
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
  

app.use(router)
app.mount('#app')