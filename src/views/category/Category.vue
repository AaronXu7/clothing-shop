<template>
  <div id="category">
      <navbar class="navbar">
        <template v-slot:center>
          <h4>商品分类</h4>
        </template>
      </navbar>
      <scroll class="scroll-height">
        <category-tab/>
      </scroll>
  </div>
</template>

<script>
import Navbar from 'common-cpn/navbar/Navbar'
import Scroll from 'common-cpn/scroll/Scroll'

import CategoryTab from './childCpn/CategoryTab'

export default {
    name:'Category',
    components:{
        Scroll,
        Navbar,
        CategoryTab
    }
}
</script>

<style lang="less">
  #category{
    .navbar{
      color:#fff;
      background-color: @main-color;
    }
    .scroll-height{
      height: calc(100vh - 99px);
      overflow: hidden;
    }
  }
</style>