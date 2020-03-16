<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goodsList" :goods="item" :key="index" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {
      // 每个item的宽度
      itemWidth: 0,
      // 页面总宽度
      totalWidth: 0,
      // 最小高度
      minHeight: 0,
      // 最小高度对应的下标
      minIndex: 0
    };
  },
  methods: {
    // 用瀑布流的方式显示商品
    showFallsStyle() {
      this.initStyleParams();

      this.sortItemByFallsStyle();
    },
    // 对元素用瀑布流方式排列
    sortItemByFallsStyle() {
      // 获取到所有的item
      const itemEles = document.querySelectorAll(".goods-list-item");
      // 把第一排放好
      const rowHeights = [];
      for (let i = 0; i < this.lignCount; i++) {
        itemEles[i].style.left = i * this.itemWidth + "px";
        const height = itemEles[i].offsetHeight;
        rowHeights.push(height);
      }
      for (let i = this.lignCount; i < itemEles.length; i++) {
        // 获取到最小值
        this.getMinHeight(rowHeights);
        itemEles[i].style.left = this.minIndex * this.itemWidth + "px";
        itemEles[i].style.top = this.minHeight + "px";
        rowHeights[this.minIndex] += itemEles[i].offsetHeight;
      }
      // 给父盒子设置高度,防止塌陷
      const fatherEle = document.querySelector(".goods-list");
      let maxHeight = rowHeights[0];
      for (const value of rowHeights) {
        if (maxHeight < value) {
          maxHeight = value;
        }
      }
      fatherEle.style.height = maxHeight + "px";
    },
    // 获取到高度最小值
    getMinHeight(rowHeights) {
      this.minIndex = 0;
      this.minHeight = rowHeights[0];
      rowHeights.forEach((value, index) => {
        if (this.minHeight > value) {
          this.minHeight = value;
          this.minIndex = index;
        }
      });
    },
    initStyleParams() {
      // 获取到每个item的width
      this.itemWidth = document.querySelector(".goods-list-item").offsetWidth;
      // 获取到当前网页可见宽度
      this.totalWidth = window.screen.width;
      // 计算出每一行容纳多少个item
      this.lignCount = Math.floor(this.totalWidth / this.itemWidth);
    }
  },
  mounted() {
    
  },
  // 监听数据的变化
  watch: {
    goodsList: {
      deep: true,
      handler() {
        setTimeout(() => {
          this.showFallsStyle();
        }, 100);
      }
    }
  }
};
</script>

<style scoped>
.goods-list {
  position: relative;
}
.goods-list .goods-list-item {
  position: absolute;
}
</style>