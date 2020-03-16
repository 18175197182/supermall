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
  data(){
    return {
      scroll: null,
    };
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      // 运行其子元素发送点击事件
      click: true,
    });
  },
}
</script>

<style>

</style>