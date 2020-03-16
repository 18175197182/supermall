<template>
  <div class="scroll" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'Scroll',
  props: {
    probeType:{
      type: Number,
      default: 0,
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
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      // 运行其子元素发送点击事件
      click: true,
      // probeType：0：在滚动时不触发scroll，1：滚动只触发一次scroll，2：滚动期间一直触发，3：手指按着滚动时一致触发，放开后还会触发一段时间
      probeType: this.probeType,
    });
  },
}
</script>

<style>

</style>