import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user/user'
import busModule from './bus/bus'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: {
      ...userModule
    },
    bus: {
      ...busModule
    }
  }
})
