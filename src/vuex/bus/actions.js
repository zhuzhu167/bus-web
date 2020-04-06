import {
  findR,
  lessT,
  getRMsg,
  getS,
  getXS,
  getSEST,
  getSES
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
      if (res.data.data === null || res.data.data.length === 0) {
        $Toast({
          content: '找不到线路',
          type: 'error'
        })
        commit('SET_ROUTE_LIST', {})
        commit('SET_ROUTE_SHOW', false)
      } else {
        commit('SET_ROUTE_LIST', res.data.data)
        commit('SET_ROUTE_SHOW', true)
      }
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
      if (res.data.data === null || res.data.data.length === 0) {
        $Toast({
          content: '找不到站点',
          type: 'error'
        })
        commit('SET_TRANSFER_LIST', {})
        commit('SET_TRANSFER_SHOW', false)
      } else {
        let msg = res.data.data
        let arr = msg.split('-')
        commit('SET_TRANSFER_LIST', arr)
        commit('SET_TRANSFER_SHOW', true)
      }
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
      if (res.data.data === null || res.data.data.length === 0) {
        $Toast({
          content: '周围没有站点',
          type: 'error'
        })
        commit('SET_SYNSTATIONLIST', {})
        commit('SET_SYNSTATION_SHOW', false)
      } else {
        commit('SET_SYNSTATIONLIST_NULL', [])
        commit('SET_SYNSTATIONLIST', res.data.data)
        commit('SET_SYNSTATION_SHOW', true)
      }
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
      if (res.data.data === null || res.data.data.length === 0) {
        $Toast({
          content: '找不到站点',
          type: 'error'
        })
      } else {
        commit('SET_STATIONLIST', res.data.data)
      }
    } else {
      $Toast({
        content: '找不到站点',
        type: 'error'
      })
    }
  })
}
// 站点模糊查询
export const GetXStations = ({
  commit
}, data) => {
  getXS(data).then(res => {
    if (res.data.status === 200) {
      if (res.data.data === null || res.data.data.length === 0) {
        $Toast({
          content: '找不到站点',
          type: 'error'
        })
      } else {
        commit('SET_STATION_SHOW', true)
        commit('SET_STATIONLIST', res.data.data)
      }
    } else {
      $Toast({
        content: '找不到站点',
        type: 'error'
      })
    }
  })
}

// 站点查询-换乘
export const GetSEStationsTran = ({
  commit
}, data) => {
  getSEST(data.sta, data.end, data.tran, data.rid, data.ridTran).then(res => {
    if (res.data.status === 200) {
      if (res.data.data === null || res.data.data.length === 0) {
        $Toast({
          content: '找不到站点',
          type: 'error'
        })
      } else {
        commit('SET_STATIONLIST', res.data.data)
      }
    } else {
      $Toast({
        content: '找不到站点',
        type: 'error'
      })
    }
  })
}

export const GetSEStations = ({
  commit
}, data) => {
  getSES(data.sta, data.end, data.rid).then(res => {
    if (res.data.status === 200) {
      if (res.data.data === null || res.data.data.length === 0) {
        $Toast({
          content: '找不到站点',
          type: 'error'
        })
      } else {
        commit('SET_STATIONLIST', res.data.data)
      }
    } else {
      $Toast({
        content: '找不到站点',
        type: 'error'
      })
    }
  })
}
