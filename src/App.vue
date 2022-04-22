<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
      this.$store.dispatch('reqGetAll')
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html{
  /* 设置平滑滚动，为a跳转做调整 */
  scroll-behavior: smooth;
}
</style>
