<template>
  <div class="detail-goods-info">
    <div class="detail-desc" v-show="detailInfo.desc != ''">
      <p class="left">—————————</p><br>
      <p style="font-size: 14px">{{detailInfo.desc}}</p>
      <p class="right">—————————</p>
    </div>
    <div class="ditail-image" v-for="items in detailInfo.detailImage">
      <div style="padding: 20px;font-size: 14px">{{items.key}}</div>
      <div v-for="item in items.list">
        <img style="width:100%;" :src="item">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo:{
      type: Object,
      default: () => {},
      require: true,
    },
  },
}
</script>

<style scoped>
.detail-goods-info .detail-desc {
  /* width: 100%; */
  padding: 10px;
}
</style>