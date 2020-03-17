<template>
  <div class="detail">
    <detail-nav-bar />
  </div>
</template>

<script>
import DetailNavBar from './childComp/DetailNavBar';
export default {
  name: "Detail",
  data(){
    return {
      iid: null,
    };
  },
  components: {
    DetailNavBar,
  },
  created(){
    // 保存查询参数
    this.iid = this.$route.query.iid;
  },
}
</script>

<style scoped>

</style>