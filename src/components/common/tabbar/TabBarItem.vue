<template>
  <div class="tab_bar_item" @click="itemOnClick">
    <div v-if="!isActive">
      <slot name="item_icon"></slot>
    </div>
    <div v-else>
      <slot name="item_active_icon"></slot>
    </div>
    <div :style="fontColor"><slot name="item_text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
    };
  },
  props: {
    path: {
      type: String,
      default: "",
      require: true,
    },
    activeFontColor: {
      type: String,
      default: "#ff5777",
    },
  },
  computed: {
    isActive(){
      return this.path == this.$route.path;
    },
    fontColor(){
      return this.isActive ? {color: this.activeFontColor}: {};
    },
  },
  methods: {
    itemOnClick(){
      this.$router.replace(this.path);
    },
  },
}
</script>

<style>
  .tab_bar_item {
    flex: 1;
    padding-top: 5px;
  }
  
  .tab_bar_item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>