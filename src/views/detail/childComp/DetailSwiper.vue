<template>
  <div class="detail-swiper">
    <swiper>
      <slider v-for="(item,index) in topImages" :key="index">
        <img :src="item" @load="imgLoadOk">
      </slider>
    </swiper>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper';
import Slider from 'components/common/swiper/Slider';
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    Slider,
  },
  props: {
    topImages: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    imgLoadOk(){
      this.$bus.$emit('imgLoadRefresh');
    },
  },
}
</script>

<style scoped>
.detail-swiper .hy-swiper{
  margin-top: 44px;
  height: 450px;
}
</style>