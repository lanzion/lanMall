import { LoadAdvertList, HandleImageData, ProductData } from "../service/GetData.js";
export default {
  getHeadNav: function () {
    var This = this;
    var CheckTime = '';
    // headNavArr
    LoadAdvertList("IMAGE", "Navigation", 1, 100, CheckTime).then(function (res) {
      This.state.headNavArr = ProductData(res.Data);
      This.state.headNavArr.forEach(e => {
        var obj = {
          bannerMess:[],
        }
        This.state.home.list.push(obj);
      });
      if (This.state.home.list.length > This.state.headNavArr.length){
        This.state.home.list.slice(0, This.state.headNavArr.length)
      }
    });
  },
  getHome: function (state) {
    var This = this;
    var CheckTime = '';
    console.log(state);

  }
}