export const SET_ROUTE_LIST = (state, data) => {
  state.routeList = data
}
export const SET_ROUTE_SHOW = (state, data) => {
  state.routeIsShow = data
}

export const SET_TRANSFER_LIST = (state, data) => {
  state.transferList = data
}

export const SET_TRANSFER_SHOW = (state, data) => {
  state.transferIsShow = data
}

export const SET_SYNSTATION_SHOW = (state, data) => {
  state.synsStationShow = data
}

export const SET_SYNSTATIONLIST = (state, data) => {
  state.synsStationList.push(data)
}

export const SET_STATIONLIST = (state, data) => {
  state.stationList = data
}
