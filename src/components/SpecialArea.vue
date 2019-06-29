<template>
  <div class='spcialarea' v-if="SpecialArea.length">
    <div class="title"><img :src="SpecialArea[0].ImageUrl" alt=""></div>
    <div class="spcialarea_list">
      <a :href="item.Url" class='spcialarea_list_box' v-for="(item,index) in SpecialArea.slice(1)" :key="index">
        <img :src="item.ImageUrl" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      SpecialArea:{
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
.spcialarea{
  &_list{
    margin: 0 20/@rem;
    position: relative;
    &_box:nth-of-type(2){
      width: 43%;
      margin-top: 10/@rem;
    }
    &_box:nth-of-type(3),&_box:nth-of-type(4){
      position: absolute;
      width: 55%;
      right: 0;
      bottom: 170/@rem;
    }
    &_box:nth-of-type(4){
      bottom: 0;
    }
  }
}
</style>