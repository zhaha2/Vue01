<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace
      active-class="active">Home</router-link> |
    <router-link to="/about"
      active-class="active">About</router-link> -->
   
    <!-- <router-link to="/home" tag="button" replace>Home</router-link> |
    <router-link to="/about">About</router-link> -->

    <button @click="homeClick()">Homepage</button>
    <button @click="aboutClick()">About</button>
    <!-- <router-link :to="/user/+userId">User</router-link> -->
    <!-- 传递参数方式二：query  （适合大量数据传输 -->
    <!-- <router-link :to="{
      path: '/profile',
      query: {name: 'zha',
              age: 18,
              height: 1.88}
    }">Profile</router-link> -->

    <button @click="userClick()">User</button>
    <button @click="profileClick()">Profile</button>

    <!-- 不再每次切换路由都destroy当前组件 -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>
 
<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      // 手动实现路由功能
      // push 等于 pushState
      // this.$router.push('/home')
      // 多次点击同一个button会报错
       this.$router.replace('/home')
    },
    aboutClick() {
      // this.$router.push('/about')
      // 获取new VueRouter的路由对象
      // 任何一个组件拿到的$router都是一样的；不同于route，route是获取当前活跃状态的路由
      // 所有组件都继承了Vue类的原型
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {name: 'zha',
              age: 18,
              height: 1.88}
        })
    }
  },
  data() {
    return {
      userId: 'Aimer'
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

.active{
  color: red;
}
</style>
