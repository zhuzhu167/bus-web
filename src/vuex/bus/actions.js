import {
  findR,
  lessT,
  getRMsg,
  getS
} from '@/api/bus'
const {
  $Toast
} = require('../../../static/dist/base/index')
// 查找公交线路
export const SearchRoute = ({
  commit
}, data) => {
  findR(data).then(res => {
    if (res.data.status === 200) {
      commit('SET_ROUTE_LIST', res.data.data)
      commit('SET_ROUTE_SHOW', true)
    } else {
      $Toast({
        content: '找不到线路',
        type: 'error'
      })
      commit('SET_ROUTE_LIST', {})
      commit('SET_ROUTE_SHOW', false)
    }
  })
}
// 出行方案
export const LessTransfer = ({
  commit
}, data) => {
  let start = data.start
  let end = data.end
  lessT(start, end).then(res => {
    if (res.data.status === 200) {
      let msg = res.data.data
      let arr = msg.split('-')
      commit('SET_TRANSFER_LIST', arr)
      commit('SET_TRANSFER_SHOW', true)
    } else {
      $Toast({
        content: '找不到站点',
        type: 'error'
      })
      commit('SET_TRANSFER_LIST', {})
      commit('SET_TRANSFER_SHOW', false)
    }
  })
}
// 获取公交信息
export const GetRoutesMsg = ({
  commit
}, data) => {
  getRMsg(data).then(res => {
    if (res.data.status === 200) {
      commit('SET_SYNSTATIONLIST', res.data.data)
      commit('SET_SYNSTATION_SHOW', true)
    } else {
      $Toast({
        content: '周围没有站点',
        type: 'error'
      })
      commit('SET_SYNSTATIONLIST', {})
      commit('SET_SYNSTATION_SHOW', false)
    }
  })
}
// 获取全部站点
export const GetStations = ({
  commit
}, data) => {
  getS(data).then(res => {
    if (res.data.status === 200) {
      commit('SET_STATIONLIST', res.data.data)
    } else {
      $Toast({
        content: '找不到该线路站点',
        type: 'error'
      })
    }
  })
}
