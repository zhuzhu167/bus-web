import {
  aUser,
  fUser,
  like,
  userF,
  findL,
  myF
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
      wx.setStorageSync('loginName', data.loginName)
      wx.setStorageSync('userId', data.userName)
    } else {
      $Toast({
        content: res.data.msg,
        type: 'error'
      })
    }
  })
}
// 是否登录
export const CheckLogin = ({
  commit
}, data) => {
  commit('LOGIN', true)
  commit('SET_USERNAME', data)
}
// 登录
export const Login = ({
  commit
}, data) => {
  fUser(data).then(res => {
    if (res.data.status === 200) {
      wx.reLaunch({
        url: '/pages/busIndex/main',
        success() {
          $Toast({
            content: '登录成功',
            icon: 'right'
          })
        }
      })
      commit('LOGIN', true)
      commit('SET_USERNAME', res.data.data.userName)
      wx.setStorageSync('loginName', res.data.data.loginName)
      wx.setStorageSync('userName', res.data.data.userName)
    } else {
      $Toast({
        content: res.data.msg,
        type: 'error'
      })
    }
  })
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
        type: 'error'
      })
    }
  })
}
// 我的反馈
export const GetMyFeedback = ({
  commit
}, data) => {
  myF(data).then(res => {
    if (res.data.status === 200) {
      commit('SET_MYFEEDBACK', res.data.data)
    }
  })
}
// 获取闹钟列表
export const GetClockList = ({
  commit
}, data) => {
  if (wx.getStorageSync('clockList')) {
    let arr = wx.getStorageSync('clockList')
    commit('SET_ISREMIND', true)
    commit('SET_CLOCKLIST', arr)
  }
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
  let arr = []
  if (wx.getStorageSync('clockList')) {
    arr = arr.concat(wx.getStorageSync('clockList'))
  }
  arr.push(data)
  commit('SET_ISREMIND', true)
  commit('SET_CLOCKLIST', arr)
  wx.setStorageSync('clockList', arr)
}
// 查找失物
export const GetLost = ({
  commit
}, data) => {
  findL().then(res => {
    if (res.data.status === 200) {
      commit('SET_LOSTLIST', res.data.data)
    }
  })
}
