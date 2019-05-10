<template>
  <div class="home">
    <head-nav :headNavArr='headNavArr'></head-nav>
    <div class="home_conten" id="ASwiper" v-if="headNavArr.length">
      <swiper ref="swiper-wrapper" id="swiper-container" :options='contenSwiper' @slideChangeTransitionEnd="end">
        <swiper-slide v-for="(news, index) in headNavArr"  :key="index">
          <div>
            {{index}}
          </div>
          <!-- <div class="loading" v-else>
            <img src="../../assets/images/370310983500145999.gif" alt="">
          </div> -->
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headNav from "@/components/nav.vue";
import banner from '@/components/banner.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide,
    headNav,
    banner
  },
  data() {
    return {
      contenSwiper: {
        resistanceRatio: 0,
        touchRatio: 0.6,
        observer: true,
        observeParents: true,
        init() {
          this.scrollTop=[];
        },
        on: {
          // transitionEnd(){
          //   var previousIndex = this.previousIndex;
          //   var activeIndex = this.activeIndex;
          //   this.App.headerNavArr[previousIndex].scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          //   if(this.App.headerNavArr[activeIndex].scrollTop){
          //     window.scrollTo(0,this.App.headerNavArr[activeIndex].scrollTop)
          //   }else{
          //     window.scrollTo(0,0)
          //   }
          // }
        }
      }
    };
  },
  computed: {
     HomeData() {
      return this.$store.state.home;
    },
    headNavArr(){
      return this.$store.state.headNavArr;
    },
    swiper() {
      return this.$refs["swiper-wrapper"].swiper;
    },
  },
  watch: {
    $route() {
      
    }
  },
  methods: {
    async end() {
      this.$store.state.home.newsIndex = this.swiper.activeIndex;
      this.$store.state.home.newsPrevIndex = this.swiper.previousIndex;

      // if (this.headerNavArr[this.$store.state.home.newsIndex].loading == 0) {
      //   this.$store.dispatch("getHome");
      // }
    },
  },
  created() {
    if(!this.$store.state.headNavArr.length){
      this.$store.dispatch("getHeadNav");
    }
  }
};
</script>
