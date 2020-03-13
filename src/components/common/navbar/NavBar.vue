<template>
  <div class="navbar">
    <div class="left"><slot name="navbar-left"></slot></div>
    <div class="center"><slot name="navbar-center"></slot></div>
    <div class="right"><slot name="navbar-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    styleConfig: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
  .navbar {
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .navbar .center {
    flex: 1;
  }
 
</style>