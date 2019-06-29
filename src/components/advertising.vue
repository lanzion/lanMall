<template>
  <div class='advertising' v-if="advertising.length">
    <div class="advertising_list" v-if="advertising.length>1">
      <a :href="item.Url" class="advertising_box" v-for="(item,index) in advertising" :key="index">
        <img :src="item.ImageUrl" alt="">
      </a>
    </div>
    <div class="advertising_list_one" v-if="advertising.length==1">
      <a :href="advertising[0].Url" class="advertising_box">
        <img :src="advertising[0].ImageUrl" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    advertising:{
      type: Array,
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@rem: 46.875rem;
.advertising_list{
  padding: 20/@rem 10/@rem 0 10/@rem;
  .advertising_box{
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 10/@rem;
  }
}
.advertising_list_one{
  padding: 20/@rem 20/@rem 0 20/@rem;
  .advertising_box{
    width: 100%;
    border-radius: 20/@rem;
    overflow: hidden;
  }
}
</style>