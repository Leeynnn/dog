import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'

Vue.config.productionTip = false

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import { Lazyload } from 'vant';
Vue.use(Lazyload);

import VueTouch from '@js/VueTouch'
const _Vue = VueTouch(Vue)

window.Vue = new _Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
