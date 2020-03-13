<template>
  <div class="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data(){
    return { 
    }
  },
}
</script>

<style>
  .tab_bar {
    display: flex;
    position: fixed;
    bottom: 0;
    height: 49px;
    width: 100%;
    box-shadow: 0px 0px 1px 5px rgba(100, 100, 100, 0.2);
    text-align: center;
    background-color: #DADADA;
    font-size: 14px;
  }
 
  
</style>