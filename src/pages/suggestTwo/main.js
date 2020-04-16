import Vue from 'vue'
import App from './index'
import swipeRight from '../../utils/swipeRight'
Vue.mixin(swipeRight)
const app = new Vue(App)
app.$mount()
