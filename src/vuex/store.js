import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import actions from './actions'
import { state, mutations } from './mutations'

const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
