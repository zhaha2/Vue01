export default {
  state : {
    name: 'shion'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    // 这个context指自己模块的mutation
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'coco')
      }, 1000);
    }
  },
  getters: {
    fullName(state) {
      return 'akai ' + state.name
    },
    fullName2(state, getters) {
      return getters.fullName + ' @.@'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  }
}