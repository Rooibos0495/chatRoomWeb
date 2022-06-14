import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VDistpicker from 'v-distpicker';
// ajax
import axios from 'axios'
//绑定原型
Vue.prototype.$axios = axios
Vue.component('v-distpicker', VDistpicker);
Vue.config.productionTip = false
//全局
Vue.use(ElementUI);

new Vue({
  router,
  store,
  Vuex,
  axios,
  render: h => h(App)
}).$mount('#app')
