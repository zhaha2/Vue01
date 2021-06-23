<template>
  <div class="home">
    <h2>Home</h2>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('en');
    // document.querySelector('body').setAttribute('style', `background: green`)
    document.querySelector('body').classList.add("homeBg")
    next()
  },
  beforeRouteLeave(to, from, next) {
    // document.querySelector('body').setAttribute('style', '')
    document.querySelector('body').classList.remove("homeBg")
    next()
  }
}
</script>

<style>
  .homeBg {
    background: no-repeat url("../../assets/img/bg/E0IS6ePVEAIhyTI.jpg");
    background-size: 100%;
  }
</style>