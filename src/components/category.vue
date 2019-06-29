<template>
  <div class='category' v-if="category.length">
    <a href="" v-for="(item,index) in category" :key="index" :class="'cate0 cate'+category.length">
     <div class="catebox">
        <div class="cate_img"><img v-lazy="item.ImageUrl" alt=""></div>
        <div class="cate_title">{{item.Title}}</div>
     </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['category'],
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
@rem:46.875rem;
.category{
  .cate0{
    display: inline-block;
    box-sizing: border-box;
    padding: 10/@rem 20/@rem;
  }
  .cate10,.cate9,.cate5{
    width: 20%;
  }
  .cate7,.cate8,.cate4{
    width: 25%;
  }
  .cate6,.cate3{
    width: 33.3333%;
  }
  .cate2{
    width: 50%;
  }
  .cate_img{
    position: relative;
    width: 100%;
    height: 120/@rem;
    img{
      width: 90/@rem;
      height: 90/@rem;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .cate_title{
    font-size: 24/@rem;
    color: #3a3a3a;
    text-align: center;
  }
}
</style>