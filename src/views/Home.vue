<template>
  <div class="home" v-if="HomeData.loadingFlag">
    <banner :bannerMess = 'HomeData.swiperSlides'></banner>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/banner.vue'

export default {
  name: "home",
  components: {
    banner
  },
  data() {
    return {};
  },
  computed: {
     HomeData() {
      return this.$store.state.home;
    },
  },
  watch: {
    $route() {
      if (
        this.$store.state.home.swiperSlides.length == 0 &&
        this.$route.meta.index == 0
      ) {
        this.$store.dispatch("getHome");
      }
    }
  },
  created() {
    if (
      this.$store.state.home.swiperSlides.length == 0 &&
      this.$route.meta.index == 0
    ) {
      this.$store.dispatch("getHome");
    }
  }
};
</script>
