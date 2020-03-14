<template>
  <div class="home-recommends">
    <a :href="item.link" v-for="item in recommends" class="recommend">
      <div>
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default: () => [],
      require: true,
    },
  },
}
</script>

<style>
  .home-recommends {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 10px solid rgba(100, 100, 100, 0.2);
  }
  .recommend {
    flex: 1;
  }
  .recommend img {
    height: 75px;
    width: 75px;
    margin-bottom: 5px;
  }
</style>