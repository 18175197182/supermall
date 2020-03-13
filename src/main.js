import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入路由对象
import router from './router';
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
