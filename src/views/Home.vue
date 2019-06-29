<template>
  <div class="home">
    <head-nav :headNavArr='headNavArr'></head-nav>
    <div class="home_conten" id="ASwiper" v-if="headNavArr.length">
      <swiper ref="swiper-wrapper" id="swiper-container" :options='contenSwiper' @slideChangeTransitionEnd="end">
        <swiper-slide v-for="(news, index) in headNavArr"  :key="index" :class='"slide"+index'>
          <div>
            <home-main v-if="news.Url=='home'" :HomepageData='HomeData[index]'></home-main>
            <home-other v-if="news.Url!='home'" :HomepageData='HomeData[index]' :pageName='news.Url'></home-other>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div id="gotop" @click="gotop"><img src="../assets/images/top.png" alt=""></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import headNav from "@/components/nav.vue";
import HomeMain from "../components/HomeMain.vue";
import HomeOther from "../components/HomeOther.vue";
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide,
    headNav,
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
        }
      }
    };
  },
  computed: {
     HomeData() {
      return this.$store.state.home.list;
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
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      var oldSlide = document.getElementsByClassName('slide'+n)[0];
      this.$store.state.home.list[o].scrollTop = scrollTop;
      
      this.swiper.slideTo(n,0,false);
      window.scrollTo(0,this.$store.state.home.list[n].scrollTop);
      this.$router.push({ params: { id: this.$store.state.headNavArr[n].Url } });
      var item = this.$store.state.headNavArr[n].Url.toUpperCase();
      if (!this.$store.state.home.list[n].bannerMess.length) {
        this.$store.dispatch("getHome");
        var aswiperitem = setInterval(() => {
          if(this.$store.state.home.list[n].bannerMess.length){
            document.getElementById('ASwiper').style.height=oldSlide.clientHeight+'px';
            clearInterval(aswiperitem)
          }
        }, 1000);
      }else{
        document.getElementById('ASwiper').style.height=oldSlide.clientHeight+'px';
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
    gotop(){
      window.scrollTo(0,0)
    },
    rolling(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var gotop = document.getElementById('gotop');
      var ASwiper = document.getElementById('ASwiper');
      if(gotop){
        if(scrollTop>500) gotop.style.display = 'block';
        else gotop.style.display = 'none';
      }
    }
  },
  mounted () {
    this.$nextTick(()=>{
      window.addEventListener('scroll', this.rolling)
    })
  },
  created() {
    if(!this.$store.state.headNavArr.length){
      this.$store.dispatch("getHeadNav");
    };
    var setTime = setInterval(() => {
      if(this.$store.state.headNavArr.length){
        if (this.$store.state.home.newsIndex==0&&!this.HomeData[0].bannerMess.length) {
          this.$store.dispatch("getHome");
          clearInterval(setTime)
        }
      }
    }, 1000);
  }
}; 
</script>
<style lang="less" scoped>
@rem:46.875rem;
.home{
  background: #f8f8f8;
  padding-bottom: 110/@rem;
  #gotop{
    position: fixed;
    width: 60/@rem;
    height: 60/@rem;
    padding: 10/@rem;
    bottom: 150/@rem;
    right: 20/@rem;
    z-index: 1000;
    background: rgba(0,0,0,.6);
    border-radius: 10/@rem;
    display: none;
  }
}
#ASwiper{
  overflow: hidden;
}
.swiper-wrapper .swiper-slide{
  padding-top: 200/@rem;
  box-sizing: border-box;
}
</style>

