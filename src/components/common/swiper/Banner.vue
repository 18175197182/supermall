<template>
  <div class="banner">
    <v-touch @swipeleft="left" @swiperight="right">
      <ul class="banner-ul" @touchstart="clearTimerId" @touchend="createInterval">
        <li class="banner-li" v-for="item in results">
          <img :src="item.image" alt="">
        </li>  
      </ul>
    </v-touch>
    <ul class="point-ul">
      <li v-for="(item,index) in results" class="point-li" :style="onPoint(index)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      currentIndex: 0,
      timerId: null,
    };
  },
  props: {
    results: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  computed: {
    imgLength() {
      return document.querySelectorAll(".banner-li img").length;
    }
  },
  methods: {
    moveImg(){
      const imgWidth = parseInt(getComputedStyle(document.querySelector('.banner-li img')).width);
      // 获取到图片个数
      const imgs = document.querySelectorAll(".banner-li img");
      const bannerUl = document.querySelector(".banner-ul");
      let left = parseInt(getComputedStyle(bannerUl).left);
      if(this.currentIndex < 0){
        this.currentIndex = this.imgLength - 1;
      }else if(this.currentIndex > this.imgLength - 1){
        this.currentIndex = 0;
      }
      bannerUl.style.left = -this.currentIndex * imgWidth + 'px';
    },
    right() {
      this.currentIndex --;
      this.moveImg();
    },
    left() {
      this.currentIndex ++;
      this.moveImg();
    },
    onPoint(index){
      return this.currentIndex == index ? {backgroundColor: "#ff5777"} : {};
    },
    clearTimerId(){
      clearInterval(this.timerId);      
    },
    createInterval(){
      this.timerId = setInterval(() => {
        this.currentIndex ++;
        this.moveImg();
      },2000);
    }
  },
  created(){
    this.timerId = setInterval(() => {
      this.currentIndex ++;
      this.moveImg();
    },2000);
  },
};
</script>

<style>
.banner {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.banner-ul {
  position: absolute;
  width: 1500px;
  height: 100%;
  transition: left 0.2s linear;
  left: 0;
  top: 0;
}
.banner .point-ul {
  display: flex;
  position: absolute;
  left: 37%;
  bottom: 10px;
}
.banner .point-li {
  list-style: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: white;
  flex: 1;
}
.banner-ul .banner-li {
  float: left;
  height: 100%;
}
.banner-li img {
  width: 375px;
}
</style>