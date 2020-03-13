<template>
  <div>
    <home-nav-bar class="home-nav" />
  </div>
</template>

<script>
import HomeNavBar from 'views/home/components/HomeNavBar';
export default {
  name: "Home",
  components: {
    HomeNavBar,
  },
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
  }
</style>