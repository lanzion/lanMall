import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('./views/Home.vue')), 'Home');
const Search = r => require.ensure([], () => r(require('./views/Search.vue')), 'Search');
const Category = r => require.ensure([], () => r(require('./views/Category.vue')), 'Category');
const ShoppingCart = r => require.ensure([], () => r(require('./views/ShoppingCart.vue')), 'ShoppingCart');
const Personal = r => require.ensure([], () => r(require('./views/Personal.vue')), 'Personal');
const MoreHotProduct = r => require.ensure([], () => r(require('./views/MoreHotProduct.vue')), 'MoreHotProduct');

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
    {
      path:'/morehotproduct',
      name:'morehotproduct',
      component: MoreHotProduct,
      meta: {
        index: 4,
        loadname: "morehotproduct",
        name: "morehotproduct",
      }
    },
  ]
})
