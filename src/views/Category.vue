<template>
  <div class="category">
    <div class="category_top"><router-link :to="{name:'search'}"><img src="../assets/images/sear_img.png" alt=""> 请输入搜索内容</router-link></div>
    <div class="category_conter">
      <div class="category_conter_left">
        <swiper :options="treeSwiper">
          <swiper-slide style="height: auto;" v-for="(menuItem,menuIndex) in dataList" :key="menuIndex">
            <div :class="ins==menuIndex? 'menu active':'menu'" @click="changeMenu(menuItem,menuIndex)">{{menuItem.NAME}}</div>
          </swiper-slide>
        </swiper>
      </div>
      <div :class="ins==index? 'category_conter_right active':'category_conter_right'" v-for="(item,index) in dataList" :key="index">
        <div class="catedory_list" v-for="(subItem,subIndex) in item.son" :key="subIndex">
          <div class="catedory_title">{{subItem.NAME}}</div>
          <div class="catedory_list_conter">
            <a :href="sonItem.URL" v-for="(sonItem,sonIndex) in subItem.son" :key="sonIndex">
              <div class="cate_img"><img v-lazy='sonItem.IMG_URL' alt=""></div>
              <div class="cate_name">{{sonItem.NAME}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { GetTypeTree,ProductData } from "../service/GetData";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      treeSwiper: {
        direction: "vertical",
        slidesPerView: "auto",
        // freeMode: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        mousewheel: true,
        on: {
          init: function() {}
        }
      },
      dataList:[],
      typeId:712,
      lodeing:true,
      ins:0,
    };
  },
  methods: {
    changeMenu(menuItem,menuIndex){
      this.ins = menuIndex;
    },
    getTypeTree(){
      var This = this;
      GetTypeTree({TypeId:this.typeId}).then(res=>{
        var jsonp = [];
        var IntData = function(root, data, pid) {
          for (var i = 0, j; (j = data[i++]); ) {
            if (root.RECID == j.PARENT) {
              if (root.RECID == pid) {
                jsonp.push(j);
              } else {
                if (!root.son) {
                  root.son = [];
                  if(j.IMG_URL!='null') {
                    j.IMG_URL = This.imageConverter(j.IMG_URL)
                  }
                  root.son.push(j);
                } else {
                  if(j.IMG_URL!='null') {
                    j.IMG_URL = This.imageConverter(j.IMG_URL)
                  }
                  root.son.push(j);
                }
              }
              IntData(j, data);
            }
          }
        };
        IntData({ RECID: This.typeId }, res.Data, This.typeId);
        // console.log(jsonp);
        this.dataList = jsonp;
        this.lodeing = false;
        console.log(this.dataList);
      }).catch(err=>{
        console.log(err);
      })
    },
    imageConverter(json){
      var arr = JSON.parse(json);
      var src = '';
      if(arr.length)  src = arr[0].ServerUrl+arr[0].FilePath+'.thumb.'+arr[0].FileExt;
      return src
    }
  },
  created () {
    this.getTypeTree()
  }
};
</script>

<style lang="less" scoped>
@rem:46.875rem;
.category{
  height: 100%;
  &_top{
    height: 80/@rem;
    background: #e6e6e6;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 10/@rem 20/@rem;
    z-index: 1000;
    a{
      height: 100%;
      background: #fff;
      border-radius: 20/@rem;
      box-sizing: border-box;
      font-size: 24/@rem;
      color: #565656;
      line-height: 60/@rem;
      padding-left: 20/@rem;
      img{
        width: 40/@rem;
        display: inline-block;
        vertical-align: middle;
        margin: 10/@rem;
      }
    }
  }
  &_conter{
    height: 100%;
    box-sizing: border-box;
    padding-top: 90/@rem;
    padding-bottom: 100/@rem;
    position: relative;
    background: #f9f9f9;
    &_left{
      position: absolute;
      width: 180/@rem;
      top: 90/@rem;
      left: 0;
      height: 86%;
      .swiper-container {
        height: 100%;
      }
      .menu{
        height: 110/@rem;
        color: #8d8b8b;
        border-bottom: 1px solid #eeebeb;
        background: #fff;
        font-size: 30/@rem;
        text-align: center;
        line-height: 110/@rem;
      }
      .menu.active{
        color: #b4282d;
        border-bottom: 1px solid #b4282d;
      }
    }
    &_right{
      padding-left: 200/@rem;
      height: 100%;
      display: none;
      overflow: scroll;
      .catedory_list{
        .catedory_title{
          color: #383838;
          font-size: 28/@rem;
          position: relative;
          height: 40/@rem;
          line-height: 40/@rem;
          padding: 20/@rem 0;
          padding-left: 30/@rem;
          &::after{
            position: absolute;
            content: ' ';
            width: 15/@rem;
            height: 15/@rem;
            background: #b4282d;
            border-radius: 50%;
            top: 50%;
            left: 0/@rem;
            transform: translateY(-50%);
          }
        }
        &_conter{
          background: #fff;
          padding: 10/@rem 0;
          border-radius: 20/@rem;
          a{
            width: 33.3333%;
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            color: #8d8b8b;
            font-size: 26/@rem;
            .cate_img{
              padding-bottom: 100%;
              position: relative;
              img{
                width: 80%;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                position: absolute;
              }
            }
          }
        }
      }
    }
    .category_conter_right.active{
      display: block;
    }      
  }
}
</style>