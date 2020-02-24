<template>
  <div id="cart">
      <!-- 导航nav -->
      <navbar class="navbar">
        <template v-slot:center>
          <h4>购物车({{cartLength}})</h4>
        </template>
      </navbar>
      <!-- 购物车商品 -->
      <scroll class="scroll-height" ref="scroll">
        <cart-list/>
      </scroll>
      <!-- 商品汇总 -->
      <cart-com/>
  </div>
</template>

<script>
import Scroll from 'common-cpn/scroll/Scroll'
import Navbar from 'common-cpn/navbar/Navbar'

import CartList from './childCpn/CartList'
import CartCom from './childCpn/CartCom'

import { mapGetters } from 'vuex'

export default {
    name:'Cart',
    components:{
      Navbar,
      CartCom,
      CartList,
      Scroll
    },
    computed:{
      ...mapGetters(['cartLength'])
    },
    activated(){
        this.$refs.scroll.refresh()
    }
}
</script>

<style lang="less">
  #cart{
    .navbar{
      background-color: @main-color;
      color:#fff;
    }
    .scroll-height{
        height: calc(100vh - 99px);
        overflow: hidden;
    }
  }
</style>