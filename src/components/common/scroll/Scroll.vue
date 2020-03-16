<template>
  <div class="scroll" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 导入util方法
import {debounce} from 'common/util.js';

import BScroll from 'better-scroll';
export default {
  name: 'Scroll',
  props: {
    probeType:{
      type: Number,
      default: 0,
    },
    pullUpLoad:{
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x,y,time = 300){
      this.scroll.scrollTo(x,y,time);
    },
    on(type,callback){
      this.scroll.on(type,callback);
    },
    handleFinishPullUp(){
      this.scroll.finishPullUp();
    },
    // 当图片加载完成后调用，因为会调用多次，所以封装一个防抖函数
    imgLoadOk(){
      console.log('===============');
      this.scroll.refresh();
    },
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      // 运行其子元素发送点击事件
      click: true,
      // probeType：0：在滚动时不触发scroll，1：滚动只触发一次scroll，2：滚动期间一直触发，3：手指按着滚动时一致触发，放开后还会触发一段时间
      probeType: this.probeType,
      // 上拉刷新
      pullUpLoad: this.pullUpLoad,
    });
    const refresh = debounce(this,this.imgLoadOk);
    this.$bus.$on('imgLoadOk',refresh);
  },
}
</script>

<style>

</style>