<template>
  <div class="navbar">
      <div class="navbar-left"><slot name="left"></slot></div>
      <div class="navbar-center"><slot name="center"></slot></div>
      <div class="navbar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:'Navbar'
}
</script>

<style lang="less">
    .navbar{
        // position: fixed;
        // left: 0;
        // right: 0;
        // top: 0;
        // z-index: 1;
        text-align: center;
        display: flex;
        align-items: center;
        height: 44px;
        box-shadow: 0px 0px 5px rgba(0,0,0,.2);
        h4{
            margin: .8rem 0;
        }
        .navbar-left,.navbar-right{
            width: 20%;
        }
        .navbar-center{
            width: 60%;
        }
    }
</style>