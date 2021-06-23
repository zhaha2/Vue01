import Vue from 'vue'
import {INCREMENT} from './mutations-types'

export default {
  [INCREMENT](state) {
    state.counter++    
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state, payload) {
    state.counter += payload.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    state.info.name = 'kanata'
  },
  addAddress(state) {
    Vue.set(state.info, 'address', 'JP')
  },
  rmAddress(state) {
    Vue.delete(state.info, 'address')
  },
}