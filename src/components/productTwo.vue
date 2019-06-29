<template>
  <div class='product' v-if="product.length">
      <div class="product_box" v-for="(item,index) in product" :key="index">
        <a :href="item.Url">
          <div class="product_img"><img v-lazy="item.ImageUrl" alt=""></div>
          <div class="product_tag"><span v-if="item.PromotionTag&&item.PromotionTag!='优惠券'">{{item.PromotionTag}}</span></div>
          <div class="product_title">{{item.Title}}</div>
          <div class="product_des">{{item.Describe}}</div>
          <div class="product_pic">￥{{item.Param1}}</div>
        </a>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      product:{
        type:Array
      }
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
@rem:46.875rem;
.product{
  padding: 0 10/@rem;
  &_box{
    width: 50%;
    box-sizing: border-box;
    padding: 10/@rem;
    display: inline-block;
    a{
      background: #fff;
      padding: 10/@rem;
      border-radius: 20/@rem;
      overflow: hidden;
      padding-bottom: 20/@rem;
    }
  }
  &_img{
    position: relative;
    padding-bottom: 100%;
    img{
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &_tag{
    height: 60/@rem;
    padding-left: 20/@rem;
    span{
      font-size: 24/@rem;
      color: #b4282d;
      border: 1px solid #b4282d;
      padding: 0 6/@rem;
      line-height: 50/@rem;
    }
  }
  &_title{
    font-size: 30/@rem;
    color: #565656;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10/@rem 0;
  }
  &_des{
    font-size: 28/@rem;
    color: #a7a7a7;
    padding-bottom: 10/@rem;
     white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &_pic{
    font-size: 30/@rem;
    color: #b4282d;
  }
}
</style>