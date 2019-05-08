<template>
  <div class="foot_nav">
    <router-link :to="{name: 'home'}" :class="routes_name=='home'?'foot_nav1 active':'foot_nav1'">
      <div class="foot_icone"></div>
      <p>首页</p>
    </router-link>
    <router-link :to="{name: 'category'}" :class="routes_name=='category'?'foot_nav2 active':'foot_nav2'">
      <div class="foot_icone"></div>
      <p>分类</p>
    </router-link>
    <router-link :to="{name: 'shoppingcart'}" :class="routes_name=='shoppingcart'?'foot_nav3 active':'foot_nav3'">
      <div class="foot_icone"></div>
      <p>购物车</p>
    </router-link>
    <router-link :to="{name: 'personal'}" :class="routes_name=='personal'?'foot_nav4 active':'foot_nav4'">
      <div class="foot_icone"></div>
      <p>我</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes_name:'home',
    };
  },
  watch: {
    $route(){
      this.routes_name = this.$route.name;
    }
  },
  created () {
    this.routes_name = this.$route.name;
  }
};
</script>

<style lang="less" scoped>
@rem: 46.875rem;
.foot_nav {
  position: fixed;
  width: 100%;
  height: 90 / @rem;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e0e0e0;
  a {
    width: 25%;
    text-align: center;
    color: #a8a8a8;
    font-size: 26/@rem;
    display: inline-block;
    height: 100%;
    p{
      padding-top: 6/@rem;
    }
  }
  .foot_icone {
    width: 40 / @rem;
    height: 40/@rem;
    margin: 4 / @rem auto;
    background: url('../assets/images/footericonshop.png');
    background-size: 435% 238%;
  }
  .foot_nav1{
    .foot_icone{
      background-position: 0 0;
    }
  }
  .foot_nav2{
    .foot_icone{
      background-position: -45/@rem 0;
    }
  }
  .foot_nav3{
    .foot_icone{
      background-position: -90/@rem 0;
    }
  }
  .foot_nav4{
    .foot_icone{
      background-position: -135/@rem 0;
    }
  }
  .foot_nav1.active{
    color: #b4282d;
    .foot_icone{
      background-position: 0 -53/@rem;
    }
  }
  .foot_nav2.active{
    color: #b4282d;
    .foot_icone{
      background-position: -45/@rem -53/@rem;
    }
  }
  .foot_nav3.active{
    color: #b4282d;
    .foot_icone{
      background-position: -90/@rem -53/@rem;
    }
  }
  .foot_nav4.active{
    color: #b4282d;
    .foot_icone{
      background-position: -135/@rem -53/@rem;
    }
  }
}
</style>