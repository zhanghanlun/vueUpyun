// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI, { Message } from 'element-ui'
import axios from 'axios'

// Vue.config.productionTip = false

Vue.use(ElementUI)


Vue.prototype.$message = Message
Vue.prototype.$http = axios

//配置请求根路径
axios.defaults.baseURL = 'http://localhost:8080/'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})