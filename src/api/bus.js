import _axios from '@/utils/axiosConfig'

export const findR = (id) => _axios({
  url: `/bus/findRoute?id=${id}`,
  method: 'get'
})

export const lessT = (start, end) => _axios({
  url: `/bus/lessTransfer?start=${start}&end=${end}`,
  method: 'get'
})

export const getRMsg = (name) => _axios({
  url: `/bus/getRoutesMsg?name=${name}`,
  method: 'get'
})

export const getS = (id) => _axios({
  url: `/bus/getStations?id=${id}`,
  method: 'get'
})
