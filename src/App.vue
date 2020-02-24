<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <menus></menus>
  </div>
</template>

<script>
import Menus from 'content-cpn/menu/Menu'
export default {
  name:'App',
  components:{
    Menus
  }
}
</script>

<style lang="less">
  @import 'assets/css/normalize.css';
</style>
