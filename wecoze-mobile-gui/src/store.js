import Vue from 'vue'
import Vuex from 'vuex'
import config from './config'
console.log(config)
Vue.use(Vuex)
let Store = new Vuex.Store({
  state: {
    index: 0
  }
})
export default Store
