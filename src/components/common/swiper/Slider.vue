<template>
  <div class="slider">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    result: {
      type: Array,
      default: () => [],
      require: true
    }
  }
};
</script>

<style>
.slider {
  flex-shrink: 0;
  width: 100%;
}
.slider img {
  width: 100%;
}
</style>