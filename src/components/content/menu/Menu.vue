<template>
  <tabbar>
      <tabbar-item path="/home"></tabbar-item>
      <tabbar-item path="/category" menu="分类" menuIcon="th-large"></tabbar-item>
      <tabbar-item path="/cart" menu="购物车" menuIcon="shopping-cart"></tabbar-item>
      <tabbar-item path="/profile" menu="我的" menuIcon="user"></tabbar-item>
    </tabbar>
</template>

<script>
import Tabbar from 'common-cpn/tabbar/Tabbar'
import TabbarItem from 'common-cpn/tabbar/TabbarItem'
export default {
    name:'Menus',
    components:{
        Tabbar,
        TabbarItem
    }
}
</script>

<style>

</style>