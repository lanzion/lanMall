import { LoadAdvertList, HandleImageData } from "../service/GetData.js";
export default {
    getHome: function () {
        var This = this;
        var CheckTime = '';
        LoadAdvertList("IMAGE", "HOME_BANNER", 1, 100, CheckTime).then(function (res) {
            This.state.home.swiperSlides = HandleImageData(res)
            This.state.home.loadingFlag++;
          })
    }
}