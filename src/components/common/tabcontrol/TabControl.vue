<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" @click="onClickItem(index)">
      <span class="tab-control-title" :class="{isSelected: currentShowIndex == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {
      currentShowIndex: 0,
      goodsTypes: ["pop", "new", "sell"]
    };
  },
  methods: {
    onClickItem(index) {
      this.currentShowIndex = index;
      this.$emit("selectGoodsType", this.goodsTypes[index]);
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  width: 100%;
  background-color: white;
  text-align: center;
}
.tab-control .tab-control-item {
  flex: 1;
}
.tab-control .tab-control-item .tab-control-title {
  padding: 5px;
}
.isSelected {
  color: rgb(255, 87, 119);
  border-bottom: 2px solid rgba(255, 87, 119, 0.7);
}
</style>