export const lost = (id) => _axios({
  url: `/route/selectRoute?id=${id}`,
  method: 'get',
})
