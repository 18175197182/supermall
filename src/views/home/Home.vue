<template>
  <div id="home">
    <home-nav-bar />
    <tab-control
      v-show="showTopTabControl"
      class="topTabControl"
      :titles="tabControlTitles"
      @selectGoodsType="selectGoodsType"
    />
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true">
      <home-swiper :result="bannerList"></home-swiper>
      <home-recommend :recommends="recommendList" />
      <home-feature-view />
      <tab-control :titles="tabControlTitles" @selectGoodsType="selectGoodsType" ref="tabControl" />
      <goods-list :goods-list="currentShowData" />
    </scroll>
    <back-top v-show="showBackTop"/>
  </div>
</template>
<script>
// 导入公共组件
import TabControl from "components/common/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import { debounce } from "common/util.js";

// 导入子组件组件
import HomeNavBar from "views/home/components/HomeNavBar";
import HomeSwiper from "views/home/components/HomeSwiper";
import HomeRecommend from "./components/HomeRecommend";
import HomeFeatureView from "./components/HomeFeatureView";

// 导入方法
import { getHomeMultidata, getHomeData } from "network/home.js";
import { checkShowBackTop } from "common/util.js";

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
    BackTop
  },
  data() {
    return {
      banner: null,
      bannerList: null,
      dKeyword: null,
      keywords: null,
      recommend: null,
      // 是否显示BackTop
      showBackTop: false,
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
      },
      // 是否显示贴顶的tabControl
      showTopTabControl: false,
      // 保存home中滚动的位置
      saveY: 0
    };
  },
  methods: {
    checkShowBackTop(position) {
      if (-position.y >= document.body.clientHeight) {
        this.showBackTop = true;
      } else {
        this.showBackTop = false;
      }
    },
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
    // 判断是否显示贴顶的TabControl
    checkShowTopTabControl() {
      const tabControl = this.$refs.tabControl;
      if (
        !this.showTopTabControl &&
        tabControl.$el.getBoundingClientRect().top <= 44
      ) {
        this.showTopTabControl = true;
      }
      if (
        this.showTopTabControl &&
        tabControl.$el.getBoundingClientRect().top > 44
      ) {
        this.showTopTabControl = false;
      }
    },
    // 点击tabcontrol，切换显示内容
    selectGoodsType(dataType) {
      this.currentShowType = dataType;
      this.currentShowData = this.goods[dataType].list;
    },
    // 上拉后加载更多数据
    getMoreData() {
      this.goods[this.currentShowType].page += 1;
      const params = {
        type: this.currentShowType,
        page: this.goods[this.currentShowType].page
      };
      getHomeData(params).then(res => {
        this.goods[this.currentShowType].list.push(...res.data.list);
        this.currentShowData = this.goods[this.currentShowType].list;
        // 数据加载完毕之后，调用scroll的结束下拉，
        this.$refs.scroll.handleFinishPullUp();
      });
    }
  },
  // 创建组件之后就发送请求
  created() {
    // 获取/home/multidata的数据
    this.getHomeMultidata();

    // 获取/home/data数据
    this.getHomeData();
  },
  mounted() {
    // 绑定scroll事件，显示回到顶部的组件
    this.$refs.scroll.on("scroll",this.checkShowBackTop);
    // 绑定上拉事件，用于上拉加载更多
    const func = debounce(this, this.getMoreData);
    this.$refs.scroll.on("pullingUp", () => {
      func();
    });
    // 监听页面滚动，给让tabControl贴在上面
    this.$refs.scroll.on("scroll", this.checkShowTopTabControl);
  },
  // 切换回来时，回到刚刚保存的位置
  activated() {
    this.$refs.scroll.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  // 切换别的组件时保存y的位置
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

/* 由于现在是局部滚动，所以这个可以不用设置fixed */
.home-nav-bar {
  /* position: fixed; */
  /* top: 0; */
  background-color: var(--color-tint);
  color: var(--color-background);
  width: 100%;
  height: 44px;
  z-index: 9;
}
.tab-control {
  height: 50px;
  line-height: 50px;
}
#home .scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.topTabControl {
  position: relative;
  top: 0;
  z-index: 9;
}
</style>