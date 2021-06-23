<template>
  <h2>Category</h2>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('en');
    // document.querySelector('body').setAttribute('style', `background: green`)
    document.querySelector('body').classList.add("categoryBg")
    next()
  },
  beforeRouteLeave(to, from, next) {
    // document.querySelector('body').setAttribute('style', '')
    document.querySelector('body').classList.remove("categoryBg")
    next()
  }
}
</script>

<style>
  .categoryBg {
    background: no-repeat url("../../assets/img/bg/E2T1R85VgAAbpWm.jpg");
    background-size: 100%;
  }
</style>