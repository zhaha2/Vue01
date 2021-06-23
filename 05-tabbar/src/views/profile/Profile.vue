<template>
  <h2>Profile</h2>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('en');
    // document.querySelector('body').setAttribute('style', `background: green`)
    document.querySelector('body').classList.add("profileBg")
    next()
  },
  beforeRouteLeave(to, from, next) {
    // document.querySelector('body').setAttribute('style', '')
    document.querySelector('body').classList.remove("profileBg")
    next()
  }
}
</script>

<style>
  .profileBg {
    background: no-repeat url("../../assets/img/bg/Ez3opYMVoAMQqUW.jpg");
    background-size: 100% auto
  }
</style>