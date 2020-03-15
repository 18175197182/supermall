<template>
  <div id="home">
    <home-nav-bar class="home-nav" />
    <home-swiper class="home-swiper" :result="bannerList">
    </home-swiper>
    <home-recommend :recommends="recommendList" />
    <home-feature-view />
    <tab-control :titles="tabControlTitles" />
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
      <li>商品列表6</li>
      <li>商品列表7</li>
      <li>商品列表8</li>
      <li>商品列表9</li>
      <li>商品列表10</li>
      <li>商品列表11</li>
      <li>商品列表12</li>
      <li>商品列表13</li>
      <li>商品列表14</li>
      <li>商品列表15</li>
      <li>商品列表16</li>
      <li>商品列表17</li>
      <li>商品列表18</li>
      <li>商品列表19</li>
      <li>商品列表20</li>
      <li>商品列表21</li>
      <li>商品列表22</li>
      <li>商品列表23</li>
      <li>商品列表24</li>
      <li>商品列表25</li>
      <li>商品列表26</li>
      <li>商品列表27</li>
      <li>商品列表28</li>
      <li>商品列表29</li>
      <li>商品列表30</li>
      <li>商品列表31</li>
      <li>商品列表32</li>
      <li>商品列表33</li>
      <li>商品列表34</li>
      <li>商品列表35</li>
      <li>商品列表36</li>
      <li>商品列表37</li>
      <li>商品列表38</li>
      <li>商品列表39</li>
      <li>商品列表40</li>
      <li>商品列表41</li>
      <li>商品列表42</li>
      <li>商品列表43</li>
      <li>商品列表44</li>
      <li>商品列表45</li>
      <li>商品列表46</li>
      <li>商品列表47</li>
      <li>商品列表48</li>
      <li>商品列表49</li>
      <li>商品列表50</li>
    </ul>
  </div>
</template>

<script>
// 导入公共组件
import TabControl from 'components/common/tabcontrol/TabControl';

// 导入子组件组件
import HomeNavBar from 'views/home/components/HomeNavBar';
import HomeSwiper from 'views/home/components/HomeSwiper';
import HomeRecommend from './components/HomeRecommend';
import HomeFeatureView from './components/HomeFeatureView';

// 导入方法
import {getHomeMultidata} from 'network/home.js';

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
  },
  data(){
    return {
       banner: null,
       bannerList: null,
       dKeyword: null,
       keywords: null,
       recommend: null,
       recommendList: null,
       // 保存tabControl组件的title
       tabControlTitles: ['流行','新品','推荐'],
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
      this.recommendList = this.recommend.list;
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