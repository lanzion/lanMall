import { LoadAdvertList, HandleImageData, ProductData, CompositeCall } from "../service/GetData.js";
var more = require('../assets/images/more.png');
var catemore = require('../assets/images/catemore.png')
var serveUrl = "https://dvcms.weixinmvp.com/api/Advert/LoadAdvertList";
function GetTj(item, state) {
  var This = this;
  var CheckTime = '';
  var index = state.home.newsIndex;
  var compositData = [
    {
      key: 'bannerMess',
      url: serveUrl,
      Parameter: {
        Kind: "IMAGE",
        AdvertCode: item + '_BANNER',
        PageIndex: 1,
        PageSize: 20
      }
    },
    {
      key: 'HOME_ADVERTISING_SPACE_1',
      url: serveUrl,
      Parameter: {
        Kind: "IMAGE",
        AdvertCode: 'HOMT_ADVERTISING_SPACE_1',
        PageIndex: 1,
        PageSize: 20
      }
    },
    {
      key: 'HOME_HOT',
      url: serveUrl,
      Parameter: {
        Kind: "PRODUCT",
        AdvertCode: item+'_HOT',
        PageIndex: 1,
        PageSize: 26
      }
    },
    {
      key: 'HOMT_ADVERTISING_SPACE_2',
      url: serveUrl,
      Parameter: {
        Kind: "IMAGE",
        AdvertCode: 'HOMT_ADVERTISING_SPACE_2',
        PageIndex: 1,
        PageSize: 20
      }
    },
    {
      key: 'HOME_YUANWEI',
      url: serveUrl,
      Parameter: {
        Kind: "IMAGE",
        AdvertCode: 'HOME_YUANWEI',
        PageIndex: 1,
        PageSize: 20
      }
    },
    {
      key: 'HOME_NEW_PRODUCT',
      url: serveUrl,
      Parameter: {
        Kind: "PRODUCT",
        AdvertCode: 'HOME_NEW_PRODUCT',
        PageIndex: 1,
        PageSize: 8
      }
    },
    {
      key: 'HOME_ARTICLE',
      url: serveUrl,
      Parameter: {
        Kind: "IMAGE",
        AdvertCode: 'HOME_ARTICLE',
        PageIndex: 1,
        PageSize: 8
      }
    },
    {
      key: 'HOME_RECOMMEND',
      url: serveUrl,
      Parameter: {
        Kind: "PRODUCT",
        AdvertCode: 'HOME_RECOMMEND',
        PageIndex: 1,
        PageSize: 10
      }
    },
  ]
  CompositeCall(compositData).then(res => {
    state.home.list[index].bannerMess = ProductData(res.Data.bannerMess.Data);
    state.home.list[index].HOME_ADVERTISING_SPACE_1 = ProductData(res.Data.HOME_ADVERTISING_SPACE_1.Data);
    state.home.list[index].HOME_HOT = ProductData(res.Data.HOME_HOT.Data);
    var homehotmoer = {
      ImageUrl: more,
      Url:'',
      Title:'更多'
    }
    state.home.list[index].HOME_HOT.push(homehotmoer);
    state.home.list[index].HOMT_ADVERTISING_SPACE_2 = ProductData(res.Data.HOMT_ADVERTISING_SPACE_2.Data);
    state.home.list[index].HOME_YUANWEI = ProductData(res.Data.HOME_YUANWEI.Data);
    state.home.list[index].HOME_NEW_PRODUCT = ProductData(res.Data.HOME_NEW_PRODUCT.Data);
    state.home.list[index].HOME_ARTICLE = ProductData(res.Data.HOME_ARTICLE.Data);
    state.home.list[index].HOME_RECOMMEND = ProductData(res.Data.HOME_RECOMMEND.Data);
    state.home.list[index].flageIndex++
  }).catch(err => {
    console.log(err);
  })
}
function GetOther(item, state) {
  var This = this;
  var CheckTime = '';
  var index = state.home.newsIndex;
  var compositData = [
    {
      key: 'bannerMess',
      url: serveUrl,
      Parameter: {
        Kind: "IMAGE",
        AdvertCode: item + '_BANNER',
        PageIndex: 1,
        PageSize: 20
      }
    },
    {
      key: item+'_CATEGORY',
      url: serveUrl,
      Parameter: {
        Kind: "IMAGE",
        AdvertCode: item + '_CATEGORY',
        PageIndex: 1,
        PageSize: 9
      }
    },
    {
      key: item +'_HOTPRODUCT',
      url: serveUrl,
      Parameter: {
        Kind: "PRODUCT",
        AdvertCode: item + '_HOTPRODUCT',
        PageIndex: 1,
        PageSize: 3
      }
    },
    {
      key: item +'_NEW_PRODUCT',
      url: serveUrl,
      Parameter: {
        Kind: "PRODUCT",
        AdvertCode: item + '_NEW_PRODUCT',
        PageIndex: 1,
        PageSize: 8
      }
    },
    {
      key: item +'_HOTRECOMMEND_VERTICAL',
      url: serveUrl,
      Parameter: {
        Kind: "PRODUCT",
        AdvertCode: item + '_HOTRECOMMEND_VERTICAL',
        PageIndex: 1,
        PageSize: 10
      }
    },
  ]
  CompositeCall(compositData).then(res => {
    state.home.list[index].bannerMess = ProductData(res.Data.bannerMess.Data);
    state.home.list[index][item + '_CATEGORY'] = ProductData(res.Data[item + '_CATEGORY'].Data);
    var categoryMore = {
      Title : '更多',
      ImageUrl:catemore,
      Url: state.home.list[index][item + '_CATEGORY'][0].Url
    }
    if (state.home.list[index][item + '_CATEGORY'].length >= 9 || state.home.list[index][item + '_CATEGORY'].length < 5) state.home.list[index][item + '_CATEGORY'].push(categoryMore);
    state.home.list[index][item + '_HOTPRODUCT'] = ProductData(res.Data[item + '_HOTPRODUCT'].Data);
    state.home.list[index][item + '_NEW_PRODUCT'] = ProductData(res.Data[item + '_NEW_PRODUCT'].Data);
    state.home.list[index][item + '_HOTRECOMMEND_VERTICAL'] = ProductData(res.Data[item + '_HOTRECOMMEND_VERTICAL'].Data);
    state.home.list[index].flageIndex++
  }).catch(err => {
    console.log(err);
  })
}
export default {
  getHeadNav: function () {
    var This = this;
    var CheckTime = '';
    // headNavArr
    LoadAdvertList("IMAGE", "Navigation", 1, 100, CheckTime).then(function (res) {
      This.state.headNavArr = ProductData(res.Data);
      This.state.headNavArr.forEach((e, i) => {
        // var url = e.Url.toUpperCase();
        var obj = {
          bannerMess: [],
          flageIndex: 0,
          scrollTop:0
        }
        This.state.home.list.push(obj);
      });
      if (This.state.home.list.length > This.state.headNavArr.length) {
        This.state.home.list.slice(0, This.state.headNavArr.length)
      }
    });
  },
  getHome: function (state) {
    var This = this;
    if (state.headNavArr.length) {
      var url = state.headNavArr[state.home.newsIndex].Url.toUpperCase();
      console.log(state);
      if (url == 'HOME') GetTj(url, state);
      else GetOther(url, state);
    }
  },
}