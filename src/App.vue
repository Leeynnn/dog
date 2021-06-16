<template>
  <div id="app">
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  width: 7.5rem;
  min-height: 100%;
  overflow-x: hidden;
}
</style>