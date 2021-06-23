import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

// state抽离到常量, 一般不抽到其他文件
const state = {
  counter: 100,
  students : [
    {id:100, name: 'zha', age: 18},
    {id:101, name: 'rushia', age: 3500},
    {id:102, name: 'aqua', age: 5},
  ],
  info: {
    name: 'miko',
    age: '17',
    height: 1.5
  }
}

export default new Vuex.Store({
  state,
  mutations,    //mutations等最好抽到文件中
  actions,
  modules: {
    a: moduleA
  },
  getters
})
