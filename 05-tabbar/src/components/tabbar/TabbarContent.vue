<template>
  <div class="tab-bar-content">
    <div>
      <slot :style="contentStyle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // 父传子
  props: {
    path: String,
    bg: {
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
    contentStyle() {
      return {background: this.bg}
    }
  },
  methods: {
  }
}
</script>

<style>
  
</style>