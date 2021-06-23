<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>------------App内容：state and mutation----------------</h2>
    {{$store.state.counter}}
    <!-- 这样直接改不好,不会响应式的修改。要通过mutation -->
    <!-- <button @click="$store.state.counter++">+</button> -->
    <button @click="addition()">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="subtraction()">-</button>
    <!-- 响应式的 -->
    <button @click="addStudent()">addStu</button>

    <h2>------------App内容：info是否是响应式----------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo()">updateInfo</button>
    <button @click="addAddress()">addAddress</button>
    <button @click="rmAddress()">rmAddress</button>
    <br>
    <button @click="asyncAddAddress()">asyncAddAddress</button>

    <h2>------------App内容：modules----------------</h2>
    <!-- 模块a中的内容被放到state中 -->
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName()">updateName</button>
    <!-- 不用打a. -->
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="aUpdateName()">aUpdateName</button>

    <h2>------------App内容：getters----------------</h2>
    <h2>powerCounter: {{this.$store.getters.powerCounter}}</h2>
    <h2>more15stus: {{this.$store.getters.more15stus}}</h2>
    <h2>more15stusLen: {{this.$store.getters.more15stusLen}}</h2>
    <!-- 传入参数 -->
    <h2>moreAgestus: {{this.$store.getters.moreAgestus(20)}}</h2>

    <h2>------------Hello Vuex----------------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue"
import {
  INCREMENT
} from './store/mutations-types.js'

export default {
  name: 'App',
  data() {
    return {
      message: 'App',
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      // 调用store mutation的方法 传入事件类型
      // 最好不要这样写 'increment'这样容易写错，最好抽出去到mutation-types.js
      // this.$store.commit('increment')
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 传递参数
      // payload： 负载， 参数称为载荷
      // 1.普通的提交风格
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交风格
      this.$store.commit({
        type: 'incrementCount',    //type即事件类型
        count
      })
    },
    addStudent() {
      const stu = {id:103, name: 'pekora', age: 111}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      this.$store.commit('updateInfo')
    },
    addAddress() {
      this.$store.commit('addAddress')
    },
    rmAddress() {
      this.$store.commit('rmAddress')
    },
    asyncAddAddress() {
      // 异步，使用Action修改Mutation
      // commit提交的是mutation，action用dispatch
      this.$store
        .dispatch('asyncAddAddress', 'Im payload')    //dispatch接受函数返回的结果
        .then(res => {
          console.log('complete');
          console.log(res);
        })
    },
    updateName() {
      this.$store.commit('updateName', 'hachama')
    },
    aUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
