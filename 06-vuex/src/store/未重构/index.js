import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../router'
import {INCREMENT} from '../mutations-types'

Vue.use(Vuex)

const moduleA = {
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

export default new Vuex.Store({
  /* Vuex数据响应式的规则
      1.提前在store中初始化好所需的属性.
      2.当给state中的对象添加新属性时, 使用下面的方式:
      方式一: 使用Vue.set(obj, 'newProp', 123)
      方式二: 用心对象给旧对象重新赋值
  */
  state: {
    counter: 100,
    students : [
      {id:100, name: 'zha', age: 18},
      {id:101, name: 'rushia', age: 3500},
      {id:102, name: 'aqua', age: 5},
    ],
    info: {
      // 这些属性都会被加入到响应式系统中
      // 响应式系统会监听属性的变化，属性变化时会通知所有界面中用到该属性的地方，让界面刷新
      name: 'miko',
      age: '17',
      height: 1.5
    }
  },
  mutations: {
    // 方法
    // state自动传入，对应上面的state对象
    // increment(state) {    //事件类型
    // 对象，这样写不容易出错。mutations最好都这样写
    [INCREMENT](state) {
      state.counter++     //回调函数
    },
    decrement(state) {
      state.counter--
    },
    // incrementCount(state, count) {
    //   state.counter += count
    // },
    // 与特殊提交风格对应
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
      // 不会被添加到响应式系统，因为新添加的属性并没有提前初始化。直接修改数组不是响应式的
      // state.info['address'] = 'JP'
      // 想要响应式用splice或者vue.set
      Vue.set(state.info, 'address', 'JP')
    },
    rmAddress(state) {
      // 非响应式
      // delete state.info.address
      // 响应式
      Vue.delete(state.info, 'address')
    },
  },
  actions: {
    // 异步操作
    asyncAddAddress(context, payload) {
      // 返回promise以便回调
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('addAddress')
          console.log(payload);
          resolve('111111111')
        }, 1000)
      })
    }
  },
  modules: {
    // 会先在本store找，找不到再去模块里找
    a: moduleA
  },
  getters: {
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
      // 返回函数以使用传入参数
      // return function (age) {
      //   return state.students.filter(s => s.age >= age)
      // }
        return age => state.students.filter(s => s.age >= age)
    }
  }
})
