<template>
  <div class="detail">
    {{iid}}
  </div>
</template>

<script>
export default {
  name: "Detail",
  data(){
    return {
      iid: null,
    };
  },
  created(){
    // 保存查询参数
    this.iid = this.$route.query.iid;
  },
}
</script>

<style scoped>

</style>