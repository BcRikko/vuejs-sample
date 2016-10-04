import * as types from './mutation-types'

export default {
  [types.CREATE_TASK] ({ commit }, task) {
    console.log('actions', types.CREATE_TASK, commit, task)
    commit(types.CREATE_TASK, task)
  },

  [types.EDIT_TASK] ({ commit }, task) {
    console.log('actions', types.EDIT_TASK, commit, task)
    commit(types.EDIT_TASK, task)
  },

  [types.DELETE_TASK] ({ commit }, task) {
    console.log('actions', types.DELETE_TASK, commit, task)
    commit(types.DELETE_TASK, task)
  },

  [types.DONE_TASK] ({ commit }, task) {
    console.log('actions', types.DONE_TASK, commit, task)
    commit(types.DONE_TASK, task)
  }
}
