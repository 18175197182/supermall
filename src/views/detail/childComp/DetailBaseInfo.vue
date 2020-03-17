<template>
  <div class="detail-base-info">
    <div class="title">
      {{baseInfo.title}}
    </div>
    <div class="all-price">
      <div class="price">
        {{baseInfo.price}}
      </div>
      <div class="oldPrice">{{baseInfo.oldPrice}}</div>
      <div class="active">活动价</div>
    </div>
    <div class="columns">
      <div class="columns-item" v-for="item in baseInfo.columns">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    baseInfo: {
      type: Object,
      defaul: {},
      require: true,
    },
  },
}
</script>

<style scoped>
.detail-base-info .title {
  padding: 5px;
  font-size: 20px;
  font-weight: 700;
}
.detail-base-info .all-price {
  display: flex;
  padding-left: 15px;
  height: 50px;
}
.detail-base-info .price {
  line-height: 50px;
  font-size: 24px;
  color: var(--color-high-text);
}
.detail-base-info .oldPrice {
  color: rgba(0, 0, 0, 0.3);
  padding: 20px 5px 0px 5px;
  text-decoration: line-through;
  font-size: 14px;
}
.detail-base-info .active {
  background-color: var(--color-high-text);
  margin-bottom: 27px;
  border-radius: 5px;
  color: white;
  font-size: 14px;
}
.detail-base-info .columns {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
.detail-base-info .columns .columns-item {
  justify-content: space-between;
  font-size: 14px;
}
</style>