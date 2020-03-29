import {
  aUser,
  fUser,
  like
} from '@/api/user'
const {
  $Toast
} = require('../../../static/dist/base/index')
// 注册
export const Register = ({
  commit
}, data) => {
  aUser(data).then(res => {
    if (res.data.status === 200) {
      $Toast({
        content: '注册成功',
        type: 'success'
      })
      wx.switchTab({
        url: '/pages/user/main'
      })
      commit('LOGIN', true)
      commit('SET_USERNAME', data.userName)
    } else {
      $Toast({
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
      $Toast({
        content: '登录成功',
        type: 'success'
      })
      wx.switchTab({
        url: '/pages/user/main'
      })
      commit('LOGIN', true)
      commit('SET_USERNAME', res.data.data)
    } else {
      $Toast({
        content: res.data.msg,
        type: 'error'
      })
    }
  })
}
// 设置提醒
export const SetRemind = ({
  commit
}, data) => {
  commit('SET_ISREMIND', data)
}
// 点赞
export const Like = ({
  commit
}, data) => {
  like(data).then(res => {
    if (res.data.status === 200) {
      $Toast({
        content: '点赞成功',
        type: 'success'
      })
    }
  })
}
