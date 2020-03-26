import _axios from '@/utils/axiosConfig'

export const aUser = (data) => _axios({
  url: '/user/insertUser',
  method: 'post',
  data
})

export const fUser = (data) => _axios({
  url: `/user/selectUser`,
  method: 'post',
  data
})

export const mUser = (id, name) => _axios({
  url: `/user/updateUser?id=${id}&name=${name}`,
  method: 'put'
})

export const userC = (data) => _axios({
  url: `/user/complaint`,
  method: 'post',
  data
})

export const Dlost = (id) => _axios({
  url: `/user/deleteLost?id=${id}`,
  method: 'delete'
})

export const userF = (data) => _axios({
  url: `/user/feedBack`,
  method: 'post',
  data
})

export const findL = () => _axios({
  url: `/user/findLost`,
  method: 'get'
})

export const like = (data) => _axios({
  url: `/user/like`,
  method: 'post',
  data
})

export const lost = (data) => _axios({
  url: `/user/lost`,
  method: 'post',
  data
})
