import Vue from 'vue'
import App from './App'
import '../static/css/Animation.css'
import '../static/css/img.css'
// Vue.config.productionTip = false
Vue.config._mpTrace = true
App.mpType = 'app'
const app = new Vue(
  App
)
app.$mount()
