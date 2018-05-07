import Vue from 'vue'
import Vuex from 'vuex'
import config from './config'
import language from './language'

Vue.use(Vuex)

let Store = new Vuex.Store({
  state: {
    index: 0,
    language: 'cn'
  },
  getters: {
    config: state => {
      let configItem = {}
      for (let name in config.UI) {
        configItem[name] = config.UI[name].map(_item => {
          _item.text = language[state.language][_item.name] || _item.name
          return _item
        })
      }
      return configItem
    }
  },
  mutations: {
    setLanguage (state, _type) {
      state.language = _type
      return Store.getters.config
    }
  }
})
export default Store
