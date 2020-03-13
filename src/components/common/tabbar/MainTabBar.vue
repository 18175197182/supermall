<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item_icon" src="~assets/img/tabbar/home.svg">
        <img slot="item_active_icon" src="~assets/img/tabbar/home_active.svg">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/categary">
        <img slot="item_icon" path="/categary" src="~assets/img/tabbar/categary.svg">
        <img slot="item_active_icon" src="~assets/img/tabbar/categary_active.svg">
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item_icon" src="~assets/img/tabbar/cart.svg">
        <img slot="item_active_icon" src="~assets/img/tabbar/cart_active.svg">
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/me">
        <img slot="item_icon" src="~assets/img/tabbar/me.svg">
        <img slot="item_active_icon" src="~assets/img/tabbar/me_active.svg">
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style>

</style>