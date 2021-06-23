<template>
  <div class="tab-bar-item" @click="itemClick()">
    <!-- 具名插槽 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 不能像下面这么做，因为插槽会被完整替换掉，class不会留下 -->
    <!-- <slot :class="{active: isActive}" name="item-text"></slot> -->
    <!-- slot包装到div里免得被替换掉 -->
    <!-- 法一 -->
    <!-- <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div> -->

    <!-- 法二 动态绑定css-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // 父传子
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'grey'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      // 当前活跃的路由是否包含当前path
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    /* tabbar常用高度：49px */
    height: 49px;  
    
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  /* .active {
    color: grey;
  } */
</style>