<template>
  <div class="goods-list-item" @click="goodsClick">
      <img :src="goods.show.img" class="goods-img" @load="imgLoadOk"/>
      <div class="goods-title">{{goods.title}}</div>
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
    // 是否收藏
    isCollection() {
      this.isClicked = !this.isClicked;
      if (this.isClicked) {
        this.goods.cfav++;
      }else{
        this.goods.cfav--;
      }
    },
    imgLoadOk(){
      // 抛出一个事件总线
      this.$bus.$emit('imgLoadOk');
    },
    // 点击商品跳转到详情页
    goodsClick(){
      // this.$router.push({path: '/detail',query: {iid: this.goods.iid}});
      this.$router.push('/detail?iid=' + this.goods.iid);
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  font-size: 14px;
  width: 49%;
  text-align: center;
  padding-left: 5px;
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