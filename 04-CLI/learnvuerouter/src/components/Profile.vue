<template>
  <div>
    <h2>Profile</h2>
    <!-- 获取数据 -->
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style>

</style>