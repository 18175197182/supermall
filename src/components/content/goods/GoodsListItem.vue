<template>
  <div class="goods-list-item">
    <a :href="goods.link">
      <img :src="goods.show.img" class="goods-img" />
      <div class="goods-title">{{goods.title}}</div>
    </a>
    <div class="goods-info">
      <span class="goods-price">{{goods.price}}</span>
      <span @click="isCollection">
        <img v-if="!isClicked" src="~assets/img/goods/star.svg" />
        <img v-else src="~assets/img/goods/star_active.svg" />
      </span>
      <span>{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default: () => {},
      require: true
    }
  },
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    isCollection() {
      this.isClicked = !this.isClicked;
      if (this.isClicked) {
        this.goods.cfav++;
      }else{
        this.goods.cfav--;
      }
    }
  }
};
</script>

<style>
.goods-list-item {
  float: left;
  font-size: 14px;
  width: 49%;
  text-align: center;
  padding: 5px;
}
.goods-list-item .goods-img {
  border-radius: 10px;
  width: 100%;
}
.goods-list-item .goods-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-list-item .goods-info {
  height: 20px;
  line-height: 20px;
}
.goods-info .goods-price {
  color: #ff5777;
  padding-right: 8px;
}
.goods-list-item .goods-info img {
  height: 100%;
  vertical-align: middle;
}
</style>