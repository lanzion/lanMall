<template>
  <div class="nav" v-if="headNavArr.length">
    <div class="top clearfloat">
      <router-link :to="{name: 'search'}" class="left"><img src="../assets/images/sear_img.png" alt=""></router-link>
      <router-link :to="{name: 'category'}" class="right"><img src="../assets/images/fenleis.png" alt=""></router-link>
    </div>
    <swiper class='Hcontainer' :options="HeaderSwiperOption" ref="headSwiper" >
        <swiper-slide :class="'headNav'+index" v-for='(item,index) in headNavArr' :key='index' @click.native="active(index)">
         <span :class="{'active':newsIndex == index}">{{item.Title}}</span>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ['headNavArr'],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
       HeaderSwiperOption: {
        freeMode: true,
        slidesPerView: "auto",
        observer: true,
        observeParents: true,
        on: {
          init() {},
          click(e) {
            var navWidth = 0;
            for (var i = 0; i < this.slides.length; i++) {
              navWidth += parseInt(this.slides.eq(i).outerWidth(true));
            }
            var clientWidth = parseInt(this.$wrapperEl.outerWidth(true));
            var clickIndex = this.clickedIndex;
            var activeSlidePosition = this.slides[clickIndex].offsetLeft;
            var tSpeed = 300;
            var navSlideWidth = this.slides.eq(clickIndex).outerWidth(true);
            this.slides
              .eq(clickIndex)
              .find("span")
              .transition(tSpeed);
            if (clickIndex > 0) {
              this.slides.eq(clickIndex - 1).transition(tSpeed);
            }
            if (clickIndex < this.slides.length) {
              this.slides.eq(clickIndex + 1).transition(tSpeed);
            }
            var navActiveSlideLeft = this.slides[clickIndex].offsetLeft;
            this.setTransition(tSpeed);
            if (
              navActiveSlideLeft <
              (clientWidth - parseInt(navSlideWidth)) / 2
            ) {
              this.setTranslate(0);
            } else if (
              navActiveSlideLeft >
              navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
            ) {
              this.setTranslate(clientWidth - navWidth);
            } else {
              this.setTranslate(
                (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
              );
            }
          }
        }
      },
    };
  },
  computed: {
    HeadNavData() {
      return this.$store.state.headNavArr;
    },
    newsIndex(){
      return this.$store.state.home.newsIndex;
    },
    headSwiper(){
       return this.$refs["headSwiper"].swiper;
    }
  },
  watch: {
    newsIndex(n,o){
      var navWidth = 0;
            for (var i = 0; i < this.headSwiper.slides.length; i++) {
              navWidth += parseInt(this.headSwiper.slides.eq(i).outerWidth(true));
            }
            var clientWidth = parseInt(this.headSwiper.$wrapperEl.outerWidth(true));
            var clickIndex = n;
            var activeSlidePosition = this.headSwiper.slides[clickIndex].offsetLeft;
            var tSpeed = 300;
            var navSlideWidth = this.headSwiper.slides.eq(clickIndex).outerWidth(true);
            this.headSwiper.slides
              .eq(clickIndex)
              .find("span")
              .transition(tSpeed);
            if (clickIndex > 0) {
              this.headSwiper.slides.eq(clickIndex - 1).transition(tSpeed);
            }
            if (clickIndex < this.headSwiper.slides.length) {
              this.headSwiper.slides.eq(clickIndex + 1).transition(tSpeed);
            }
            var navActiveSlideLeft = this.headSwiper.slides[clickIndex].offsetLeft;
            this.headSwiper.setTransition(tSpeed);
            if (
              navActiveSlideLeft <
              (clientWidth - parseInt(navSlideWidth)) / 2
            ) {
              this.headSwiper.setTranslate(0);
            } else if (
              navActiveSlideLeft >
              navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
            ) {
              this.headSwiper.setTranslate(clientWidth - navWidth);
            } else {
              this.headSwiper.setTranslate(
                (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
              );
            }
    }
  },
  methods: {
    async active(index) {
      this.$store.state.home.newsIndex = index;
    },
  },
  mounted () {
   
  },
  created () {
    
  }
};
</script>

<style lang="less" scoped>
@rem: 46.875rem;
.nav {
  border-bottom: 1px solid #fdf8f8;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  background: #fff;
  .top {
    height: 70/@rem;
    padding: 20/@rem;
    .left{
      float: left;
      width: 83%;
      background: #efefef;
      border-radius: 20/@rem;
      box-sizing: border-box;
      padding: 15/@rem 20/@rem;
      img{
        width: 40/@rem;
      }
    }
    .right{
      float: right;
      width: 15%;
      box-sizing: border-box;
      border-radius: 20/@rem;
      height: 100%;
      position: relative;
      img{
        width: 70/@rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
  .Hcontainer {
  color: #6e6e6e;
  height: 90 / @rem;
  line-height: 90 / @rem;
  z-index: 10000;
  width: auto;
  background: white;
  .swiper-slide {
    width: 170 / @rem;
    font-size: 30 / @rem;
    padding-left: 12 / @rem;
    text-align: center;
    span {
      display: inline-block;
      height: 70%;
      line-height: 66 / @rem;
      overflow: hidden;
      margin-top: 10 / @rem;
      padding-bottom: 5 / @rem;
      img {
        width: 100%;
      }
    }
    span.active{
      border-bottom: 1px solid #b4282d;
      color:#b4282d;
      font-weight: bold;
    }
  }
  .recom {
    width: 80 / @rem;
  }
  .router-link-active {
    border-bottom: 2px solid #b4282d;
    // border-bottom: 2px solid #fff;
    color: #b4282d;
    font-weight: 580;
  }
}
}
</style>