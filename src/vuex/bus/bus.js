import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state: {
    demo: 'bus.js',
    // 线路查询
    routeList: {},
    routeIsShow: false,
    // 换乘查询
    transferList: {},
    transferIsShow: false,
    // 实时站点
    synsStationList: [],
    synsStationShow: false
  },
  actions,
  mutations,
  getters
}
