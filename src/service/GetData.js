import command from './Command.js';

export let LoadAdvertList = async (kind, Advert, PageIndex, PageSize, CheckTime) => {
  return command.execute({
    api: '/api/Advert/LoadAdvertList',
    param: {
      Kind: kind,
      AdvertCode: Advert,
      PageIndex: PageIndex,
      PageSize: PageSize,
      CheckTime: CheckTime
    }
  })
};
export let HandleImageData = (res) => {
  var resultData = [];
  if (res.Data) {
    res.Data.map(function (data) {
      if (JSON.parse(data.ImageUrl)) {
        var bannerObj = {};
        bannerObj.URL = data.Url;
        bannerObj.Title = data.Title;
        bannerObj.ImageUrl =
          JSON.parse(data.ImageUrl)[0].ServerUrl +
          JSON.parse(data.ImageUrl)[0].FilePath +
          ".thumb." +
          JSON.parse(data.ImageUrl)[0].FileExt;
        if (JSON.parse(data.NavigationConfig).length == 0) {
          bannerObj.status = '0'
        } else if (JSON.parse(data.NavigationConfig).length == 1) {
          bannerObj.status = '1'
          bannerObj.NavigationConfig = JSON.parse(data.NavigationConfig)

        } else {
          bannerObj.status = '2';
          bannerObj.NavigationConfig = JSON.parse(data.NavigationConfig)
        }
        resultData.push(bannerObj);
      }
    })
  }
  return resultData

};
export let ProductData = arr => {
  if (arr.length) {
    arr.map(function (data) {
      if (data.ImageUrl) {
        data.ImageUrl =
          JSON.parse(data.ImageUrl)[0].ServerUrl +
          JSON.parse(data.ImageUrl)[0].FilePath +
          ".thumb." +
          JSON.parse(data.ImageUrl)[0].FileExt;
      }
    })
  }
  return arr;
}