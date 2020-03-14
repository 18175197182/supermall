<template>
  <div id="home">
    <home-nav-bar class="home-nav" />
    <home-swiper class="home-swiper" :result="bannerList">
    </home-swiper>
  </div>
</template>

<script>
// 导入组件
import {getHomeMultidata} from 'network/home.js';
import HomeNavBar from 'views/home/components/HomeNavBar';
import HomeSwiper from 'views/home/components/HomeSwiper';
export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
  },
  data(){
    return {
       banner: null,
       bannerList: null,
       dKeyword: null,
       keywords: null,
       recommend: null,
    }
  },
  // 创建组件之后就发送请求
  created(){
    getHomeMultidata().then(res => {
      this.banner = res.data.banner;
      this.dKeyword = res.data.dKeyword;
      this.keywords = res.data.keywords;
      this.recommend = res.data.recommend;
      this.bannerList = this.banner.list;
    });  
  },
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
  }
  .home-swiper {
    margin-top: 44px;
  }
</style>