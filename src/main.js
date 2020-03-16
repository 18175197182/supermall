import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 加入事件总线
Vue.prototype.$bus = new Vue();
// 引入路由对象
import router from './router';
// 引入vuex对象
import store from './store';
import VueTouch from 'vue-touch';
Vue.use(VueTouch,{name: 'v-touch'});
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
