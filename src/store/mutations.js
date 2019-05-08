import { LoadAdvertList, HandleImageData, ProductData } from "../service/GetData.js";
export default {
  getHeadNav: function () {
    var This = this;
    var CheckTime = '';
    // headNavArr
    LoadAdvertList("IMAGE", "Navigation", 1, 100, CheckTime).then(function (res) {
      This.state.headNavArr = ProductData(res.Data);
    });
  },
  getHome: function () {
    var This = this;
    var CheckTime = '';
    // banner
    LoadAdvertList("IMAGE", "HOME_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.home.swiperSlides = HandleImageData(res)
      This.state.home.loadingFlag++;
    });

  }
}