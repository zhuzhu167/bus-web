import {
  aUser,
  fUser,
  like,
  userF
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
      wx.switchTab({
        url: '/pages/user/main',
        success() {
          $Toast({
            content: '注册成功',
            icon: 'collection_fill'
          })
        }
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
      wx.switchTab({
        url: '/pages/user/main',
        success() {
          $Toast({
            content: '登录成功',
            icon: 'right'
          })
        }
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
  $Toast({
    content: '设置成功',
    type: 'success'
  })
  commit('SET_ISREMIND', data)
}
// 点赞
export const Like = ({
  commit
}, data) => {
  like(data).then(res => {
    if (res.data.status === 200) {
      wx.switchTab({
        url: '/pages/user/main',
        success() {
          $Toast({
            content: '点赞成功',
            icon: 'praise'
          })
        }
      })
    }
  })
}
// 反馈
export const FeedBack = ({
  commit
}, data) => {
  userF(data).then(res => {
    if (res.data.status === 200) {
      wx.switchTab({
        url: '/pages/user/main',
        success() {
          $Toast({
            content: '反馈成功',
            icon: 'mail_fill'
          })
        }
      })
    } else {
      $Toast({
        content: '反馈失败',
        type: 'success'
      })
    }
  })
}
// 设置闹钟
export const SetClock = ({
  commit
}, data) => {
  wx.navigateBack({
    delta: 3,
    success() {
      $Toast({
        content: '成功设置提醒',
        icon: 'clock_fill'
      })
    }
  })
  commit('SET_ISREMIND', true)
  commit('SET_CLOCK', data)
}
