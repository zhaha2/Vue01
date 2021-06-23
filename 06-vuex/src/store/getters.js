export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  more15stus(state) {
    return state.students.filter(s => s.age >= 15)
  },
  more15stusLen(state, getters) {
    return getters.more15stus.length
  },
  moreAgestus(state) {
    return age => state.students.filter(s => s.age >= age)
  }
}