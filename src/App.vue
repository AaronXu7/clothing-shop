<template>
  <div id="app">
    <router-view/>
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
  body{
    background-color: @main-color;
  }
</style>
