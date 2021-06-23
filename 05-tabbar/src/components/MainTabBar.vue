<template> 
  <tab-bar>
    <tab-bar-item path="/home" activeColor="grey">
    <!-- 别名 省的打../ 在vue.config.js中配置(dom中使用必须前面加~) -->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_fill.svg" alt="">
      <div slot="item-text">首页</div> 
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_fill.svg" alt="">
      <div slot="item-text">分类</div> 
    </tab-bar-item>
    <tab-bar-item path="/cart" >
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_fill.svg" alt="">
      <div slot="item-text">购物车</div> 
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_fill.svg" alt="">
      <div slot="item-text">我的</div> 
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar.vue'
  import TabBarItem from 'components/tabbar/TabBarItem.vue'

  export default {
    components: {
      TabBar,
      TabBarItem
    }  
  }
</script>

<style>

</style>