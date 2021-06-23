<template>
  <div>
    <h2>User</h2>
    <p>User Info</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      // 获取当前活跃状态的路由
      return this.$route.params.userId
    }
  },
}
</script>

<style scoped>

</style>