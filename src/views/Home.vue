<template>
  <div class="home">
    <head-nav :headNavArr='headNavArr'></head-nav>
    <div class="home_conten" id="ASwiper" v-if="headNavArr.length">
      <swiper ref="swiper-wrapper" id="swiper-container" :options='contenSwiper' @slideChangeTransitionEnd="end">
        <swiper-slide v-for="(news, index) in headNavArr"  :key="index">
          <div>
            {{index}}
            {{news.Url}}
            <!-- <compoment :is="HomeData.newsIndex==0?'HomeMain':'HomeOther'" :HomepageData='headNavArr[HomeData.newsIndex].Url'></compoment> -->
            <home-main v-if="news=='home'" :HomepageData='news.Url'></home-main>
            <home-other v-if="news!='home'" :HomepageData='news.Url'></home-other>
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
import { swiper, swiperSlide } from "vue-awesome-swiper";
import headNav from "@/components/nav.vue";
import banner from '@/components/banner.vue'
import HomeMain from "../components/HomeMain.vue";
import HomeOther from "../components/HomeOther.vue";
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide,
    headNav,
    banner,
    HomeMain,
    HomeOther
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
      if(this.$store.state.headNavArr.length&&!this.$route.params.id){
         this.$router.push({ params: { id: this.$store.state.headNavArr[0].Url } });
         this.$store.state.home.newsIndex = 0;
      }
      return this.$store.state.headNavArr;
    },
    swiper() {
      return this.$refs["swiper-wrapper"].swiper;
    },
     newsIndex(){
      return this.$store.state.home.newsIndex;
    },
  },
  watch: {
    newsIndex(n,o){
      this.swiper.slideTo(n,0,false);
      this.$router.push({ params: { id: this.$store.state.headNavArr[n].Url } });
      if (!this.HomeData.list[n].bannerMess.length) {
        // this.$store.dispatch("getHome");
      }
    },
    $route(){
      var params = this.$route.params.id;
    },
    headNavArr(n,o){
      if(n.length){
        var id = this.$route.params.id
        this.$store.state.headNavArr.forEach((v,i) => {
          if(id==v.Url){
            setTimeout(() => {
              this.$store.state.home.newsIndex = i;
            }, 20);
          }
        });
      }
    }
  },
  methods: {
    async end() {
      this.$store.state.home.newsIndex = this.swiper.activeIndex;
      this.$store.state.home.newsPrevIndex = this.swiper.previousIndex;
    },
  },
  mounted () {
    this.$nextTick(()=>{
      // this.swiper.app = this;
    })
  },
  created() {
    if(!this.$store.state.headNavArr.length){
      this.$store.dispatch("getHeadNav");
      if (!this.HomeData.list.length||!this.HomeData.list[this.$store.state.home.newsIndex].bannerMess) {
        this.$store.dispatch("getHome");
      }
    };
  }
};
</script>
