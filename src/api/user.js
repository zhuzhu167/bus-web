import _axios from '@/utils/axiosConfig'

export const aUser = () => _axios({
  url: '/user/findLost',
  method: 'get'
})
