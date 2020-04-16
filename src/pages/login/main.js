import Vue from 'vue'
import App from './index'
import store from '../../vuex'
import swipeRight from '../../utils/swipeRight'
Vue.mixin(swipeRight)
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
