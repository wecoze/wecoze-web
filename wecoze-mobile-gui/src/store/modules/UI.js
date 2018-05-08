import config from '../../config'
import language from '../../language'
import weExtend from '../../assets/weExtend'
const UI = {
  state: {
    language: 'cn',
    noticeCounts: {
      messages: 2,
      option: -1
    }
  },
  getters: {
    config: state => {
      return weExtend.deepCopy(config.UI, _item => {
        if (!(_item instanceof Array) && _item instanceof Object) {
          if (_item.id) _item.text = language[state.language][_item.id] || _item.name || _item.id
        }
        return _item
      })
    }
  },
  mutations: {
    setLanguage (state, _type) {
      state.language = _type
    },
    updateNoticeCounts (state, _options) {
      if (!_options || !_options.target) return false
      state.messages[_options.target] = _options.count
    }
  }
}
export default UI
