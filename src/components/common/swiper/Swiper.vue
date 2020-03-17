<template>
  <div class="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
      <slot></slot>
    </div>
    <div class="slider-point">
      <div class="point-item" v-for="(item,index) in sliderCount" :style="isActive(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    result: {
      type: Array,
      default: () => [],
      require: true
    },
    interval: {
      type: Number,
      default: 2000
    },
    animalDuration: {
      type: Number,
      default: 300
    },
    // 向左或向右移动一半以上才自动往那边移动
    touchIndex: {
      type: Number,
      default: 0.25
    }
  },
  data() {
    return {
      sliderCount: 0,
      swiperStyle: {},
      totalWidth: 0,
      currentIndex: 1,
      timerId: 0,
      checkTimer: 0,
      touchStartX: 0,
      touchMoveX: 0,
      touchEndX: 0,
      scrolling: false
    };
  },
  methods: {
    // 克隆前后的slider并放入其中
    handlerDOM() {
      let swiperEle = document.querySelector(".swiper");
      let sliderEles = document.getElementsByClassName("slider");
      this.sliderCount = sliderEles.length;
      if(this.sliderCount == 0){
        return setTimeout(this.handlerDOM,10);
      }
      if (this.sliderCount > 1) {
        let firstNode = sliderEles[0].cloneNode(true);
        let lastNode = sliderEles[this.sliderCount - 1].cloneNode(true);
        swiperEle.appendChild(firstNode);
        swiperEle.insertBefore(lastNode, sliderEles[0]);
        this.totalWidth = swiperEle.offsetWidth;
        this.swiperStyle = swiperEle.style;
      }
      // 直接显示最后添加的那一张图
      this.setTransform(-this.totalWidth);
    },
    // 设置移动
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },
    // 开始定时移动图片
    startTimer() {
      this.timerId = window.setInterval(() => {
        this.currentIndex++;
        // 滚动我们的图片
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    // 清除定时
    clearTimer() {
      clearInterval(this.timerId);
    },
    // 判断是否是选中的图片
    isActive(index) {
      return this.currentIndex == index + 1
        ? { backgroundColor: "#ff5777" }
        : {};
    },
    // 移动且设置过渡
    scrollContent(position) {
      this.scrolling = true;
      // 设置过渡
      this.swiperStyle.transition = `transform ${this.animalDuration}ms`;
      // 设置移动
      this.setTransform(position);
      // 判断是否要超过限度
      window.setTimeout(() => {
        this.checkScroll();
      }, this.animalDuration);
      this.scrolling = false;
    },
    // 检查它是否超过限度
    checkScroll() {
      this.swiperStyle.transition = "0ms";
      if (this.currentIndex >= this.sliderCount + 1) {
        this.currentIndex = 1;
        this.setTransform(-this.currentIndex * this.totalWidth);
      } else if (this.currentIndex <= 0) {
        this.currentIndex = this.sliderCount;
        this.setTransform(-this.currentIndex * this.totalWidth);
      }
    },
    // 手指触碰屏幕
    touchStart(event) {
      // 清除定时器
      this.clearTimer();
      // 记录手指触碰页面的x坐标
      this.touchStartX = event.targetTouches[0].pageX;
    },
    // 手指在屏幕上滑动
    touchMove(event) {
      // 记录每次move的x坐标
      this.touchMoveX = event.targetTouches[0].pageX;
      // 计算滑动距离
      const remove = this.touchMoveX - this.touchStartX;
      // 根据手指滑动距离进行移动
      this.setTransform(-this.currentIndex * this.totalWidth + remove);
    },
    // 手指离开屏幕
    touchEnd(event) {
      // 记录手指离开屏幕的x坐标
      this.touchEndX = event.changedTouches[0].pageX;
      const remove = this.touchEndX - this.touchStartX;
      if (Math.abs(remove) > this.totalWidth * this.touchIndex) {
        if (remove > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex++;
        }
      }
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.checkScroll();
      // 开启定时器
      this.startTimer();
    }
  },
  mounted: function() {
    setTimeout(() => {
      // 在slider前后添加一个slider
      this.handlerDOM();

      this.startTimer();
    }, 100);
  }
};
</script>

<style>
.hy-swiper {
  position: relative;
  overflow: hidden;
}
.swiper {
  display: flex;
}

.slider-point {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 5px;
}
.point-item {
  background-color: white;
  margin: 5px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  flex: 1;
}
</style>