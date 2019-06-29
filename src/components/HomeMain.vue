<template>
  <div class="home_main">
    <div v-if="HomepageData.flageIndex">
      <banner :bannerMess='HomepageData.bannerMess'></banner>
      <advertising :advertising='HomepageData.HOME_ADVERTISING_SPACE_1'></advertising>
      <hotsale :hotsale='HomepageData.HOME_HOT'></hotsale>
      <advertising :advertising='HomepageData.HOMT_ADVERTISING_SPACE_2'></advertising>
      <special-area :SpecialArea='HomepageData.HOME_YUANWEI'></special-area>
      <new-product :newProduct='HomepageData.HOME_NEW_PRODUCT' :pageName='"home"'></new-product>
      <home-artical :homeArtical='HomepageData.HOME_ARTICLE'></home-artical>
      <div class="recommend">
        <div class="recommend_title"><img src="../assets/images/rem.png" alt=""></div>
        <product-two :product='HomepageData.HOME_RECOMMEND'></product-two>
      </div>
    </div>
    <div class="loading" v-else><img src="../assets/images/370310983500145999.gif" alt=""></div>
  </div>
</template>

<script>
import banner from "./homeMainBanner";
import advertising from "./advertising";
import hotsale from "./hotsale";
import SpecialArea from "./SpecialArea";
import newProduct from "./newProduct";
import homeArtical from "./homeArtical";
import productTwo from "./productTwo";
export default {
  props: ["HomepageData"],
  components: {
    banner,
    advertising,
    hotsale,
    SpecialArea,
    newProduct,
    homeArtical,
    productTwo
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.loading{
  width: 100%;
  height: 100%;
}
</style>