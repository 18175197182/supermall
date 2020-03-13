
// 引入路由模块
import Router from 'vue-router';
// 引入vue模块
import Vue from 'vue';
// 在Vue中安装Router模块
Vue.use(Router);

// 引入路由映射的组件
const Home = () => import('views/home/Home');
const Cart = () => import('views/cart/Cart');
const Categary = () => import('views/categary/Categary');
const Me = () => import('views/me/Me');


// 创建映射关系
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/categary",
    component: Categary,
  },
  {
    path: "/me",
    component: Me,
  },
];

// 创建路由对象
const router = new Router({
  mode: 'history',
  routes,
});

export default router;