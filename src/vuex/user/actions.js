import {
  aUser,
  fUser
} from '@/api/user'

// 注册
export const Register = ({
  commit
}, data) => {
  aUser(data).then(res => {
    if (res.data.status === 200) {
      wx.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 2000
      })
      wx.switchTab({
        url: '/pages/user/main'
      })
      commit('LOGIN', true)
      commit('SET_USERNAME', data.userName)
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
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
      wx.switchTab({
        url: '/pages/user/main'
      })
      commit('LOGIN', true)
      commit('SET_USERNAME', res.data.data)
    }
  })
}
