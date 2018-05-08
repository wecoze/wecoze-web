// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import betterScroll from 'better-scroll'
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue'
import './assets/weui.css'
import store from './store/index'

Vue.use(AlloyFingerPlugin, { AlloyFinger })
Vue.config.productionTip = false
Vue.component('betterScroll', betterScroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
