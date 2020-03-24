import {
  aUser
} from '@/api/user'

// 注册
export const Register = ({
  commit
}, data) => {
  aUser()
  // data = {
  //   loginName: 'yezhonghao',
  //   password: 'qwertyu',
  //   phone: '13112357605',
  //   userName: 'tezhonghao'
  // }
  // aUser(data).then(result => {
  //   console.log(result)
  // })
}
