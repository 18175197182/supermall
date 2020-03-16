<template>
  <div class="home-swiper">
    <swiper>
      <slider v-for="(item,index) in result" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </slider>
    </swiper>
  </div>
</template>

<script>
import { Swiper, Slider } from "components/common/swiper/index.js";
export default {
  name: "HomeSwiper",
  props: {
    result: {
      type: Array,
      default: () => [],
      require: true
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