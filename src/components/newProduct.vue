<template>
  <div class='new' v-if="newProduct.length">
    <div class="title"><img src="../assets/images/new_product_more.png" alt="" v-if="pageName == 'home'"></div>
    <div class="title"><img src="../assets/images/new_product.png" alt="" v-if="pageName != 'home'"></div>
    <div class="new_product_list">
      <div class="new_product_list_box" v-for="(item,index) in newProduct" :key="index">
        <a :href="item.Url">
          <div class="new_product_list_box_img"><img v-lazy="item.ImageUrl" alt=""></div>
          <div class="new_product_list_box_newtag"><img src="../assets/images/new_tag.png" alt=""></div>
          <div class="new_product_list_box_title">{{item.Title}}</div>
          <div class="new_product_list_box_pic">￥{{item.Param1}}</div>
        </a>
      </div>
    </div>
    <div class="new_btn"><img src="../assets/images/new_btn.png" alt="" v-if="pageName == 'home'"></div>
  </div>
</template>

<script>
  export default {
    props: {
      newProduct:{
        type:Array
      },
      pageName:{
        type:String
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
.new{
  padding: 0 10/@rem;
  &_product_list{
    &_box{
      width: 25%;
      display: inline-block;
      box-sizing: border-box;
      padding: 5/@rem;
      a{
        background: #fff;
        border-radius: 15/@rem;
        overflow: hidden;
        padding-bottom: 10/@rem;
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
      &_newtag{
        padding: 10/@rem 0;
      }
      &_title{
        font-size: 26/@rem;
        color:#565656;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-bottom: 10/@rem;
        text-align: center;
      }
      &_pic{
        font-size: 28/@rem;
        color: #b4282d;
        text-align: center;
      }
    }
  }
  &_btn{
    width: 50%;
    padding-top: 20/@rem;
    margin: 0 auto;
  }
}

</style>