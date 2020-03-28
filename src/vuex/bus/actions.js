import {
  findR,
  lessT,
  getRMsg
} from '@/api/bus'

// 查找公交线路
export const SearchRoute = ({
  commit
}, data) => {
  findR(data).then(res => {
    if (res.data.status === 200) {
      commit('SET_ROUTE_LIST', res.data.data)
      commit('SET_ROUTE_SHOW', true)
    } else {
      wx.showToast({
        title: '找不到线路',
        icon: 'none'
      })
      commit('SET_ROUTE_LIST', {})
      commit('SET_ROUTE_SHOW', false)
    }
  })
}

export const LessTransfer = ({
  commit
}, data) => {
  let start = data.start
  let end = data.end
  lessT(start, end).then(res => {
    if (res.data.status === 200) {
      commit('SET_TRANSFER_LIST', res.data.data)
      commit('SET_TRANSFER_SHOW', true)
    } else {
      wx.showToast({
        title: '找不到站点',
        icon: 'none'
      })
      commit('SET_TRANSFER_LIST', {})
      commit('SET_TRANSFER_SHOW', false)
    }
  })
}

export const GetRoutesMsg = ({
  commit
}, data) => {
  getRMsg(data).then(res => {
    if (res.data.status === 200) {
      commit('SET_SYNSTATIONLIST', res.data.data)
      commit('SET_SYNSTATION_SHOW', true)
    } else {
      wx.showToast({
        title: '周围没站点',
        icon: 'none'
      })
      commit('SET_SYNSTATIONLIST', {})
      commit('SET_SYNSTATION_SHOW', false)
    }
  })
}
