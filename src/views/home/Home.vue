<template>
  <div id="home">
    <home-nav-bar />
    <scroll class="content">
      <home-swiper :result="bannerList"></home-swiper>
      <home-recommend :recommends="recommendList" />
      <home-feature-view />
      <tab-control :titles="tabControlTitles" @selectGoodsType="selectGoodsType" />
      <goods-list :goods-list="currentShowData" />
    </scroll>
  </div>
</template>

<script>
// 导入公共组件
import TabControl from "components/common/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

// 导入子组件组件
import HomeNavBar from "views/home/components/HomeNavBar";
import HomeSwiper from "views/home/components/HomeSwiper";
import HomeRecommend from "./components/HomeRecommend";
import HomeFeatureView from "./components/HomeFeatureView";

// 导入方法
import { getHomeMultidata, getHomeData } from "network/home.js";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
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
      currentShowType: "pop",
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
          list: []
        },
        sell: {
          page: 1,
          list: []
        },
        new: {
          page: 1,
          list: []
        }
      }
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
    getHomeData() {
      for (const params of this.requestGoodsDataParams) {
        getHomeData(params).then(res => {
          if (this.currentShowType == params.type) {
            this.currentShowData = res.data.list;
          }
          this.goods[params.type].page = res.data.page;
          this.goods[params.type].list = res.data.list;
        });
      }
    },
    // 点击tabcontrol，切换显示内容
    selectGoodsType(dataType) {
      this.currentShowType = dataType;
      this.currentShowData = this.goods[dataType].list;
    },
    getMoreData(event) {
      // event.srcElement.scrollingElement.scrollHeight 页面总高度
      // event.srcElement.scrollingElement.clientHeight 页面可视高度
      // event.srcElement.scrollingElement.scrollTop  当前向下移动的高度
      const scrollingEle = event.srcElement.scrollingElement;
      // 获取最大可移动高度
      const maxScrollRemove =
        scrollingEle.scrollHeight - scrollingEle.clientHeight;
      // 最大高度 减去 可视高度 就是我们触发获取更多数据的高度
      const getMoreDataHeight = maxScrollRemove - scrollingEle.clientHeight;
      // 满足条件获取更多数据
      if (scrollingEle.scrollTop >= getMoreDataHeight) {
        const page = this.goods[this.currentShowType].page + 1;
        const params = {
          type: this.currentShowType,
          page: page,
        };
        getHomeData(params).then(res => {
          this.goods[params.type].page = res.data.page;
          this.goods[params.type].list = this.goods[params.type].list.concat(res.data.list);
          this.currentShowData = this.goods[params.type].list;
        });
      }
    }
  },
  // 创建组件之后就发送请求
  created() {
    // 获取/home/multidata的数据
    this.getHomeMultidata();

    // 获取/home/data数据
    this.getHomeData();

    // 组件创建后添加一个监听事件【第三个参数为true，表示从组件元素到子元素的传播路径上触发】
    // document.addEventListener("scroll", this.getMoreData, true);
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
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
#home .scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>