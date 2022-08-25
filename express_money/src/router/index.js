import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "MainPage" */ '../pages/MainPage.vue')
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import(/* webpackChunkName: "RulesPage" */ '../pages/RulesPage.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "RulesPage" */ '../pages/FAQPage.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
