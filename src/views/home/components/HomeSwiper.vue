<template>
  <swiper>
    <slider v-for="item in result">
      <img :src="item.image">
    </slider>
  </swiper>
</template>

<script>
import { Swiper, Slider } from "components/common/swiper/index.js";
export default {
  name: "HomeSwiper",
  props: {
    result: {
      type: Array,
      default: () => [],
      require: true,
    }
  },
  components: {
    Swiper,
    Slider
  }
};
</script>

<style>
</style>