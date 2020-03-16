<template>
  <div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar';
export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
  @import "assets/css/base.css";
  .main-tab-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9;
  }
</style>
