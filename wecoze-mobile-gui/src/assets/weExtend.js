const weExtend = {
  deepCopy (_target, _decorator) {
    let temp
    if (_target instanceof Array) {
      temp = []
      for (let i = 0; i < _target.length; i++) {
        if (_target instanceof Array || _target instanceof Object) {
          temp[i] = weExtend.deepCopy(_target[i], _decorator)
        } else {
          temp[i] = _target[i]
        }
      }
    } else if (_target instanceof Object) {
      temp = {}
      for (let i in _target) {
        if (!_target.hasOwnProperty(i)) continue
        if (_target instanceof Array || _target instanceof Object) {
          temp[i] = weExtend.deepCopy(_target[i], _decorator)
        } else {
          temp[i] = _target[i]
        }
      }
    } else {
      temp = _target
    }
    if (_decorator instanceof Function) {
      temp = _decorator(temp)
    }
    return temp
  }
}
export default weExtend
