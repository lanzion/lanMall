<template>
  <div id="app">
    <router-view />
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import  footNav  from "./components/footNav.vue";
export default {
  components : {
    footNav
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
</style>
