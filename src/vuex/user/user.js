import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state: {
    demo: 'user.js',
    is_login: true,
    userName: ''
  },
  actions,
  mutations,
  getters
}
