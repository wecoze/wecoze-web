import Vue from 'vue'
import Vuex from 'vuex'
import UI from './modules/UI'
Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    UI
  }
})
export default Store
