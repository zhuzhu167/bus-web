import {
  aUser,
  fUser
} from '@/api/user'
const {
  $Message
} = require('../../../static/dist/base/index')
// 注册
export const Register = ({
  commit
}, data) => {
  aUser(data).then(res => {
    if (res.data.status === 200) {
      $Message({
        content: '注册成功',
        type: 'success'
      })
      wx.switchTab({
        url: '/pages/user/main'
      })
      commit('LOGIN', true)
      commit('SET_USERNAME', data.userName)
    } else {
      $Message({
        content: res.data.msg,
        type: 'error'
      })
    }
  })
}
// 登录
export const Login = ({
  commit
}, data) => {
  fUser(data).then(res => {
    console.log(res)
    if (res.data.status === 200) {
      $Message({
        content: '登录成功',
        type: 'success'
      })
      wx.switchTab({
        url: '/pages/user/main'
      })
      commit('LOGIN', true)
      commit('SET_USERNAME', res.data.data)
    } else {
      $Message({
        content: res.data.msg,
        type: 'error'
      })
    }
  })
}
