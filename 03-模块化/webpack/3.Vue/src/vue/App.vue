<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick()">button</button>
    <h2>{{name}}</h2>
    <Cpn/>
  </div>
</template>

<script>
  import Cpn from "./Cpn"

  export default {
    name: 'App',
    data() {
      return{
        message: 'Hello Webpack',
        name: 'zha',
      }
    },
    methods: {
      btnClick() {
        console.log('btn');
      }
    },
    components: {
      Cpn
    },
  }
</script>

<style scoped>
  .title {
    color: green;
  }
</style>