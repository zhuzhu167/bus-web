import Vue from 'vue'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.config._mpTrace = true
App.mpType = 'app'
const app = new Vue(
  App
)
app.$mount()
