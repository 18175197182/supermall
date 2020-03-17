<template>
  <div class="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import {getDetailData} from 'network/detail.js';

import DetailNavBar from './childComp/DetailNavBar';
import DetailSwiper from './childComp/DetailSwiper';

export default {
  name: "Detail",
  data(){
    return {
      iid: null,
      // 存储商品详情轮播图
      topImages: [],
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  created(){
    // 保存查询参数
    this.iid = this.$route.query.iid;
    // 发送请求
    getDetailData({iid: this.iid}).then(res =>{
      this.topImages = res.result.itemInfo.topImages;
    });
  },
}
</script>

<style scoped>

</style>