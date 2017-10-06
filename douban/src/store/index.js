import Vue from 'vue'
import Vuex from 'vuex'
import moviesOnline from './moviesOnline/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moviesOnline
  }
})

