import Vue from 'vue'
import App from './index'
import store from '../../vuex'

const app = new Vue({
  ...App,
  store
})
app.$mount()
