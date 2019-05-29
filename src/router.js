import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from "./views/Search.vue";
import Category from "./views/Category.vue";
import ShoppingCart from "./views/ShoppingCart.vue";
import Personal from "./views/Personal.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home/:id?',
      name: 'home',
      component: Home,
      meta:{
        index:0,
        loadname: "home",
        name: "home",
      }
    },
    {
      path:'/search',
      name:'search',
      component: Search,
      meta: {
        index: 1,
        loadname: "search",
        name: "search",
      }
    },
    {
      path:'/category',
      name:'category',
      component: Category,
      meta: {
        index: 2,
        loadname: "category",
        name: "category",
      }
    },
    {
      path:'/shoppingcart',
      name:'shoppingcart',
      component: ShoppingCart,
      meta: {
        index: 3,
        loadname: "shoppingcart",
        name: "shoppingcart",
      }
    },
    {
      path:'/personal',
      name:'personal',
      component: Personal,
      meta: {
        index: 4,
        loadname: "personal",
        name: "personal",
      }
    },
  ]
})
