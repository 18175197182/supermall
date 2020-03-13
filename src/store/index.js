
// 引入vuex模块
import Vuex from 'vuex';

// 引入Vue模块
import Vue from 'vue';

// 在Vue中安装vuex
Vue.use(Vuex);

import getters from './getters';
import actions from './actions';
import mutations from './mutations';
// 创建store对象
const store = new Vuex.Store({
  state: {},
  getters,
  actions,
  mutations,
});

export default store;