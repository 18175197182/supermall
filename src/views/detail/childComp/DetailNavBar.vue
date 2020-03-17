<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="navbar-left" class="back">
        <img src="~assets/img/common/back.svg" @click="goBack">
      </div>
      <div slot="navbar-center" class="title">
        <div class="title-item" :class="{active: currentIndex === index}" @click="isActive(index)" v-for="(title,index) in titles">{{title}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: 'DetailNavBar',
  data(){
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    isActive(index){
      this.currentIndex = index;
    },
    goBack(){
      this.$router.back();
    }
  },
}
</script>

<style scoped>
.detail-nav-bar .title {
  display: flex;
  font-size: 13px;
}
.detail-nav-bar .title-item {
  flex: 1;
}
.detail-nav-bar .back {
  padding: 5px 40px 0px 0px;
}
.active {
  color: #ff5777;
}
</style>