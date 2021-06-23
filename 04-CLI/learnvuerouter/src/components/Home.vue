<template>
  <div>
    <h2>Homepage</h2>
    <p>hhhhhhhhhhhhh</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news'
    }
  },
  // 生命周期函数
  created() {
    console.log('home created');
  },
  destroyed() {
    console.log('home destroyed');
  },
  // 保证下次切换回来路径不变
  // activated()和deactivated()只有该组件被保存了状态，使用了keep-alive才有效
  activated() {    
    this.$router.push(this.path)
  },
  // 组件内守卫
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  }
}
</script>

<style>

</style>