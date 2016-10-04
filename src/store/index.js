import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import { state, mutations } from './mutations'

Vue.use(Vuex)

const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
