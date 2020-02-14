<template>
  <tabbar>
      <tabbar-item path="/home"></tabbar-item>
      <tabbar-item path="/category" menu="分类" menuIcon="th-large"></tabbar-item>
      <tabbar-item path="/article" menu="新闻" menuIcon="globe"></tabbar-item>
      <tabbar-item path="/contact" menu="联系" menuIcon="user"></tabbar-item>
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