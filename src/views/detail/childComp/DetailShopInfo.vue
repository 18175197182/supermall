<template>
  <div class="detail-shop-info">
    <div class="shop-services">
      <div class="service" v-for="item in shopInfo.services">
        <img :src="item.icon" />
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="shop">
      <img class="shopLogo" :src="shopInfo.shopLogo" alt />
      <span class="shopName">{{shopInfo.name}}</span>
    </div>
    <div class="shop-info">
      <div class="shop-left">
        <div class="total-sells">
          <div class="sells-num">{{totalSells}}</div>
          <div style="font-size:14px">总销量</div>
        </div>
        <div>
          <div class="goods-num">{{shopInfo.cGoods}}</div>
          <div style="font-size:14px">全部宝贝</div>
        </div>
      </div>
      <div class="shop-right">
        <div class="shop-score" v-for="item in shopInfo.score">
          <div>{{item.name}}</div>
          <div :style="{color: item.isBetter ? 'red' : 'green'}">{{item.score}}</div>
          <div v-if="item.isBetter" style="background-color:red;color:white">高</div>
          <div v-else style="background-color:green;color:white;">低</div>
        </div>
      </div>
    </div>
    <div class="allGoodsUrl"><a :href="shopInfo.allGoodsUrl">进店逛逛</a></div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default: {},
      require: true
    }
  },
  computed: {
    totalSells() {
      return this.shopInfo.cSells / 10000 > 1
        ? (this.shopInfo.cSells / 10000).toFixed(1) + "万"
        : this.shopInfo.cSells;
    }
  }
};
</script>

<style scoped>
.detail-shop-info {
  text-align: center;
}
.detail-shop-info .shop-services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 14px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.05);
}
.detail-shop-info .shop-services::after {
  content: '';
  width: 33%;
}
.detail-shop-info .shop-services .service {
  padding: 10px;
}
.detail-shop-info .shop-services .service img {
  width: 20px;
  vertical-align: middle;
}
.detail-shop-info .shop .shopLogo {
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  margin: 20px 10px;
}
.detail-shop-info .shop .shopName {
  font-size: 20px;
  font-weight: 600;
}
.detail-shop-info .shop-info {
  display: flex;
  align-items: center;
  text-align: center;
}
.detail-shop-info .shop-info .shop-left {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
}
.detail-shop-info .shop-info .shop-right {
  flex: 1;
  font-size: 14px;
}
.shop-left .total-sells .sells-num,.goods-num {
  font-size: 20px;
  padding: 5px;
}
.shop-right .shop-score {
  display: flex;
  padding: 5px 30px;
  justify-content: space-between;
  align-items: center;
}
.detail-shop-info .allGoodsUrl {
  padding: 20px 0 30px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.05);
}
.detail-shop-info .allGoodsUrl a{
  padding: 10px 50px;
  font-size: 12px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>