<template>
  <h2>Cart</h2>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('en');
    // document.querySelector('body').setAttribute('style', `background: green`)
    document.querySelector('body').classList.add("cartBg")
    next()
  },
  beforeRouteLeave(to, from, next) {
    // document.querySelector('body').setAttribute('style', '')
    document.querySelector('body').classList.remove("cartBg")
    next()
  }
}
</script>

<style>
  .cartBg {
    background: no-repeat url("../../assets/img/bg/E1zkoVVUUAYY_ar.jpg");
    background-size: 100%;
  }
</style>