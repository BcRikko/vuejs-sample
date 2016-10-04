import * as types from './mutation-types'

export const STORAGE_KEY = 'todos-vuejs'

export const state = {
  tasks: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const mutations = {
  [types.CREATE_TASK] (state, task) {
    console.log('mutation', types.CREATE_TASK, state, task)
    state.tasks.push(task)
  },

  [types.EDIT_TASK] (state, { task, edited }) {
    console.log('mutation', types.EDIT_TASK, state, task)
    task = edited
  },

  [types.DELETE_TASK] (state, task) {
    console.log('mutation', types.DELETE_TASK, state, task)
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },

  [types.DONE_TASK] (state, task) {
    console.log('mutation', types.DONE_TASK, state, task)
    task.done = true
  }
}
