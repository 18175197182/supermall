<template>
  <div id="home">
    <home-nav-bar />
    <home-swiper :result="bannerList"></home-swiper>
    <home-recommend :recommends="recommendList" />
    <home-feature-view />
    <tab-control :titles="tabControlTitles" @selectGoodsType="selectGoodsType"/>
    <goods-list :goods-list="currentShowData"/>
    
  </div>
</template>

<script>
// 导入公共组件
import TabControl from "components/common/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";

// 导入子组件组件
import HomeNavBar from "views/home/components/HomeNavBar";
import HomeSwiper from "views/home/components/HomeSwiper";
import HomeRecommend from "./components/HomeRecommend";
import HomeFeatureView from "./components/HomeFeatureView";

// 导入方法
import { getHomeMultidata,getHomeData } from "network/home.js";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banner: null,
      bannerList: null,
      dKeyword: null,
      keywords: null,
      recommend: null,
      recommendList: null,
      // 当前显示的数据类型【sell，new，pop】
      currentShowType: 'pop',
      // 保存当前显示的商品数组
      currentShowData: [],
      // 保存tabControl组件的title
      tabControlTitles: ["流行", "新品", "推荐"],
      // 保存发送请求的参数
      requestGoodsDataParams: [
        { type: "sell", page: 1 },
        { type: "pop", page: 1 },
        { type: "new", page: 1 }
      ],
      // 保存/home/data的商品数据
      goods: {
        pop: {
          page: 1,
          list: [],
        },
        sell: {
          page: 1,
          list: [],
        },
        new: {
          page: 1,
          list: [],
        },
      },
    };
  },
  methods: {
    // 封装获取/home/multidata的数据，并保存到data中
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner;
        this.dKeyword = res.data.dKeyword;
        this.kgeteywords = res.data.keywords;
        this.recommend = res.data.recommend;
        this.bannerList = this.banner.list;
        this.recommendList = this.recommend.list;
      });
    },
    // 封装获取/home/data的数据，并保存在data中
    getHomeData(){
      for(const params of this.requestGoodsDataParams){
        getHomeData(params).then(res => {
          if(this.currentShowType == params.type){
            this.currentShowData = res.data.list;
          }
          this.goods[params.type].page = res.data.page;
          this.goods[params.type].list = res.data.list; 
        });
      }  
    },
    // 点击tabcontrol，切换显示内容
    selectGoodsType(dataType){
      this.currentShowData = this.goods[dataType].list;
    },
  },
  // 创建组件之后就发送请求
  created() {
    // 获取/home/multidata的数据
    this.getHomeMultidata();

    // 获取/home/data数据
    this.getHomeData();

  },
};
</script>

<style scoped>
.home-nav-bar {
  position: fixed;
  top: 0;
  background-color: var(--color-tint);
  color: var(--color-background);
  width: 100%;
  height: 49px;
  z-index: 9;
}
.home-swiper {
  margin-top: 44px;
}
.tab-control {
  position: -webkit-sticky;
  position: sticky;
  top: 44px;
  height: 50px;
  line-height: 50px;
  z-index: 9;
}
</style>