<template>
  <div class="banner" v-if="bannerMess.length">
    <swiper :options="bannerSwiper" ref="BannerSwiper" v-if='bannerMess.length>1' class='banner-img'>
      <swiper-slide v-for="(slide,index) in bannerMess" :key="index">
          <a :href="slide.URL"><img :src="slide.ImageUrl" @click="Statistics(slide.Title + '|' + index)"></a>
      </swiper-slide>
      <div class="swiper-pagination" v-if='this.bannerMess.length>1' slot="pagination"></div>
    </swiper>
    <a v-if='bannerMess.length == 1'  :href="bannerMess[0].URL?bannerMess[0].URL:'javascript:void(0)'">
      <img :src="bannerMess[0].ImageUrl" v-if='bannerMess[0]' @click="Statistics(bannerMess[0].Title + '|0')">
    </a>
    <div class="bottom"></div>
  </div>
</template>

<script>

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: 'banner',
  props: ["bannerMess"],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      bannerSwiper: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        speed:500,
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: 'my-bullet-active',
        },
        init() {
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@rem:46.875rem;
.banner{
  position: relative;
  overflow: hidden;
  .bottom{
    background: #f8f8f8;
    height: 60/@rem;
    position: absolute;
    width: 100%;
    border-radius: 50%;
    bottom: -35/@rem;
    left: 0;
    z-index: 1;
  }
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom:15px;
}

</style>
