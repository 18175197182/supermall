<template>
  <div id="home">
    <home-nav-bar class="home-nav" />
    <banner :results="bannerList" />
  </div>
</template>

<script>
// 导入组件
import {getHomeMultidata} from 'network/home.js';
import HomeNavBar from 'views/home/components/HomeNavBar';
import Banner from 'components/common/banner/Banner';
export default {
  name: "Home",
  components: {
    HomeNavBar,
    Banner,
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
  .banner {
    margin-top: 43px;
  }
</style>