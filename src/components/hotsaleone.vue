<template>
  <div class='hotsaleone' v-if="hotsale.length">
    <div class="hot_title"><img src="../assets/images/hot_title.png" alt=""></div>
    <div class="product_list">
      <a class="product" :href="item.Url" v-for="(item,index) in hotsale" :key="index">
        <div class="product_img"><img v-lazy="item.ImageUrl" alt=""></div>
        <div class="product_right">
          <div class="product_title">{{item.Title}}</div>
          <div class="product_des">{{item.Describe}}</div>
          <div class="product_pic">￥{{item.Param1}}</div>
          <div class="product_salecou">已售:{{item.Param3}}</div>
          <div class="product_btn">立即购买</div>
        </div>
      </a>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: ['hotsale'],
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
@rem:46.875rem;
.product_list{
  padding:0 20/@rem;
  .product{
    background: #fff;
    border-radius: 20/@rem;
    margin-bottom: 10/@rem;
    &_img{
      display: inline-block;
      width: 30%;
      box-sizing: border-box;
      padding: 10/@rem;
    }
    &_right{
      width: 70%;
      box-sizing: border-box;
      padding-left: 10/@rem;   
      position: relative;   
      display: inline-block;
      vertical-align: top;
      height: 210/@rem;
    }
    &_title{
      font-size: 30/@rem;
      color: #565656;
      padding: 20/@rem 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &_des{
      font-size: 26/@rem;
      color: #b7b7b7;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 35/@rem;
    }
    &_pic{
      font-size: 30/@rem;
      color: #b4282d;
      padding-bottom: 10/@rem;
    }
    &_salecou{
      font-size: 24/@rem;
      color: #aeaeae;
    }
    &_btn{
      position: absolute;
      background: #b4282d;
      height: 60/@rem;
      line-height: 60/@rem;
      font-size: 30/@rem;
      color: #fff;
      text-align: center;
      border-radius: 30/@rem;
      padding: 0 20/@rem;
      right: 10/@rem;
      bottom: 20/@rem;
    }
  }
}
</style>