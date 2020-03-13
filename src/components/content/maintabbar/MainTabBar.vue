<template>
  <div>
    <!-- 
      tabbar的使用：
        tab-bar：定义整个tab-bar的大盒子
        tab-bar-item：定义盒子中每项的内容
          path属性：定义路由地址 
          active-font-color属性：定义文本被选中时的颜色 
     -->
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
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';
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