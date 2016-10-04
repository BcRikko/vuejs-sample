import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import * as types from './mutation-types'
import actions from './actions'

const state = {
  tasks: []
}
const getters = {}
const mutations = {
  [types.CREATE_TASK] (state, task) {
    console.log('mutation', types.CREATE_TASK, state, task)
    state.tasks.push(task)
  },

  [types.EDIT_TASK] (state, task) {
    console.log('mutation', types.EDIT_TASK, state, task)
  },

  [types.DELETE_TASK] (state, task) {
    console.log('mutation', types.DELETE_TASK, state, task)
  },

  [types.DONE_TASK] (state, task) {
    console.log('mutation', types.DONE_TASK, state, task)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
