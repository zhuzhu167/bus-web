import Vue from 'vue'
import App from './index'
import store from '../../vuex'

Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue({
  ...App,
  store
})
app.$mount()

// export default {
//   config: {
//     usingComponents: {
//       'i-input': '../../../static/dist/input/index.js'
//     }
//   }
// }
