<template>
  <div class="hotsale" v-if="hotsale.length">
    <div class="title"><img src="../assets/images/hot_title.png" alt=""></div>
    <swiper class='HotSaleSwiper' :options="HotSaleSwiper">
      <swiper-slide v-for="(slide,index) in arr1" :key="index">
        <div class="product_box" v-for="(item,index) in hotsale.slice(index*9,index*9+9)" :key="index">
          <a :href="item.Url" v-if="item.Url">
            <div class="product_img">
              <img v-lazy="item.ImageUrl" alt="">
              <img src="../assets/images/hot_tag.png" alt="" class='tag_img'>
            </div>
            <div class="product_title">{{item.Title}}</div>
            <div class="product_sales">已售:{{item.Param3}}</div>
          </a>
          <router-link class='morehot' :to="{name: 'morehotproduct'}" v-else>
             <img v-lazy="item.ImageUrl" alt="">
          </router-link>
        </div>
      </swiper-slide>
      <div class="Hot-swiper-pagination" slot="pagination"></div>
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
    hotsale: { type: Array }
  },
  data() {
    return {
      HotSaleSwiper: {
        resistanceRatio: 0,
        pagination: {
          el: ".Hot-swiper-pagination",
          bulletActiveClass: "area-bullet-active"
        }
      }
    };
  },
  computed: {
    arr1() {
      // this.hotsale;
      var arr = [];
      if (this.hotsale) {
        arr.length = Math.ceil(this.hotsale.length / 9);
      }
      return arr;
    }
  }
};
</script>

<style lang="less" scoped>
@rem:46.875rem;
.hotsale{
  .HotSaleSwiper{
    margin: 0 20/@rem;
    box-sizing: border-box;
    border-radius: 20/@rem;
    overflow: hidden;
    background: #fff;
    .Hot-swiper-pagination{
      text-align: center;
    }
  }
  .product_box{
    width: 33.3333%;
    display: inline-block;
    box-sizing: border-box;
    border-right: 1px solid #f5f2f2;
    border-bottom: 1px solid #f5f2f2;
    height: 360/@rem;
    .product_img{
      position: relative;
      padding-bottom: 100%;
      padding-top: 20/@rem;
      img{
        position: absolute;
        width: 100%;
        top: 20/@rem;
        left: 0;
        box-sizing: border-box;
      }
      .tag_img{
        width: 70/@rem;
        top:0;
      }
    }
    .product_title{
      box-sizing: border-box;
      padding: 10/@rem;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 30/@rem;
      color: #565656;
    }
    .product_sales{
       padding: 10/@rem;
      text-align: center;
      font-size: 24/@rem;
      color: #ce2626;
    }
    .morehot{
      height: 100%;
      background: #f2f2f2;
      position: relative;
      img{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
  .product_box:nth-of-type(3n){
    border-right: none;
  }
  .product_box:last-child{
    vertical-align: bottom;
  }
}
</style>