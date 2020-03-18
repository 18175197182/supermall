<template>
  <div class="detail">
    <detail-nav-bar />
    <scroll :probeType="3" class="detail-scroll" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :base-info="baseInfo" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-goods-info :detail-info="detailInfo" />
    </scroll>
    <back-top v-show="showBackTop" @click.native="clickBackTop" />
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/backTop/BackTop';

import { getDetailData, BaseInfo, ShopInfo } from "network/detail.js";

import DetailNavBar from "./childComp/DetailNavBar";
import DetailSwiper from "./childComp/DetailSwiper";
import DetailBaseInfo from "./childComp/DetailBaseInfo";
import DetailShopInfo from "./childComp/DetailShopInfo";
import DetailGoodsInfo from "./childComp/DetailGoodsInfo";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    BackTop,
  },
  data() {
    return {
      iid: null,
      // 存储商品详情轮播图
      topImages: [],
      // 存储baseInfo的数据
      baseInfo: {},
      // 存储shopInfo的数据
      shopInfo: {},
      // 存储detailInfo的数据
      detailInfo: {},
      showBackTop: false,
    };
  },
  methods: {
    checkShowBackTop(position) {
      console.log(document.body.clientHeight);
      console.log(position)
      if (-position.y >= document.body.clientHeight) {
        this.showBackTop = true;
      } else {
        this.showBackTop = false;
      }
    },
  },
  created() {
    // 保存查询参数
    this.iid = this.$route.query.iid;
    // 发送请求
    getDetailData({ iid: this.iid }).then(res => {
      this.topImages = res.result.itemInfo.topImages;
      this.baseInfo = new BaseInfo(res.result);
      this.shopInfo = new ShopInfo(res.result.shopInfo);
      this.detailInfo = res.result.detailInfo;
    });
  },
  mounted(){
    // 判断是否显示回到顶部
    this.$refs.scroll.on("scroll",this.checkShowBackTop);
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  background-color: white;
  z-index: 10;
}
.detail .detail-scroll {
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>