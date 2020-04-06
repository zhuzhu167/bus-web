import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state: {
    place: '芙蓉园',
    // 线路查询
    routeList: {},
    routeIsShow: false,
    // 换乘查询
    transferList: [],
    transferIsShow: false,
    // 实时站点
    synsStationList: [],
    synsStationShow: false,
    // 站点列表
    stationList: [],
    stationShow: false
  },
  actions,
  mutations,
  getters
}
