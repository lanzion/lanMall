<template>
  <div class='homeartical'>
    <div class="title"><img src="../assets/images/homeArtical.png" alt=""></div>
    <swiper :options="homeartical" ref="homeartical" >
      <swiper-slide v-for="(item,index) in homeArtical" :key="index">
          <a :href="item.URL">
            <img :src="item.ImageUrl">
            <div class="artiacltext">
            <div class='artiaclleft'>
              <div class='articaltitle'>{{item.Title}}</div>
            </div>
            <div class='articalright'>
              去看看 >
            </div>
          </div>
          </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      homeArtical:{
        type:Array
      }
    },
    data () {
      return {
        homeartical:{
          followFinger: true,
          centeredSlides: true,
          slidesPerView: 1.1,
          autoplayDisableOnInteraction: false,
          loopedSlides: 1,
          coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0
          },
        }
      }
    }
  }
</script>

<style lang="less" scoped>
@rem:46.875rem;
.homeartical{
  // padding: 0 20/@rem;
  .swiper-slide{
    box-sizing: border-box;
    padding-right: 36 / @rem;
    box-sizing: border-box;
    overflow: hidden;
    &:last-of-type {
      padding-right: 0 / @rem;
    }
    a {
      display: block;
      color: black;
      // background: white;
      overflow: hidden;
      position: relative;
      border-radius: 20/@rem;
      img {
        height: 400 / @rem;
        display: block;
        width: 100%;
        border-radius: 8px;
      }
    .artiacltext{
      position: absolute;
      width: 100%;
      height: 100/@rem;
      bottom: 0;
      left: 0;
      background: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.7));
    }
    .artiaclleft {
      float: left;
      box-sizing: border-box;
      padding-top: 10 / @rem;
      width: 450 / @rem;
      // height: 115 / @rem;
      position: absolute;
      left: 15/@rem;
      bottom: 15/@rem;
      color:#fff;
    }
    .articaltitle {
      height: 44 / @rem;
      line-height: 44 / @rem;
      font-size: 32 / @rem;
      color: #fff;
      font-weight: 600;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .articaldescribe {
      font-size: 28 / @rem;
      height: 50 / @rem;
      line-height: 50 / @rem;
      color: #b1b1b1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .articalright {
      box-sizing: border-box;
      height: 40 / @rem;
      line-height: 40 / @rem;
      width: 130 / @rem;
      text-align: center;
      font-size: 26 / @rem;
      color: #fff;
      position: absolute;
      white-space: nowrap;
      text-overflow: ellipsis;
      bottom: 20/@rem;
      right: 15/@rem;
      border-radius: 25/@rem;
      border: 1px solid #fff;
    }
    }
  }
}
</style>