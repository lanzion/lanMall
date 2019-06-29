import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/reset.css";
import "./assets/css/index.css";
import "./assets/script/rem.js";
import 'swiper/dist/css/swiper.css';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'http://gdtvimg.weixinmvp.com/res/gdtvimg/20180404/a8f431e43e32406aad3168bb6aaba31c.png',
  attempt: 1,
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchstart', "touchmove", 'touchend'],
  adapter: {
    loaded({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {

    },
    loading(listender, Init) {
    },
    error(listender, Init) {
    }
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
