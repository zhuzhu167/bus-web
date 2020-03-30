import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state: {
    demo: 'user.js',
    // 用户
    is_login: false,
    userName: '',
    // 闹钟
    is_remind: false,
    clockList: [],
    // 失物
    lostList: [],
    // 我的反馈
    myFeedbackList: []
  },
  actions,
  mutations,
  getters
}
