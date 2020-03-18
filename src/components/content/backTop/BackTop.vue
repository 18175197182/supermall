<template>
  <div class="back-top" @click="clickBackTop">
    <img src="~assets/img/common/top.png" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    clickBackTop(){
      this.$bus.$emit('backUp');
    },
  },
};
</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 60px;
  right: 10px;
}
.back-top img {
  width: 40px;
}
</style>