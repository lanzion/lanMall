<template>
  <div class="home_other">
    <div v-if="HomepageData.flageIndex">
      <banner :bannerMess='HomepageData.bannerMess'></banner>
      <category :category='HomepageData[pageName+"_CATEGORY"]'></category>
      <hotsaleone :hotsale='HomepageData[pageName+"_HOTPRODUCT"]'></hotsaleone>
      <new-product :newProduct='HomepageData[pageName+"_NEW_PRODUCT"]' :pageName='"other"'></new-product>
      <div class="recommend">
        <div class="recommend_title"><img src="../assets/images/rem.png" alt=""></div>
        <product-two :product='HomepageData[pageName+"_HOTRECOMMEND_VERTICAL"]'></product-two>
      </div>
    </div>
    <div class="loading" v-else><img src="../assets/images/370310983500145999.gif" alt=""></div>
  </div>
</template>

<script>
import banner from "./homeOtherBanner";
import category from "./category";
import hotsaleone from "./hotsaleone";
import newProduct from "./newProduct";
import productTwo from "./productTwo";
export default {
  props: ["HomepageData",'pageName'],
  components: {
    banner,
    category,
    hotsaleone,
    newProduct,
    productTwo
  },
  data() {
    return {};
  },
  computed: {
    
  },
  created () {
    
  }
};
</script>

<style lang="less" scoped>
.loading{
  width: 100%;
  height: 100%;
}
</style>