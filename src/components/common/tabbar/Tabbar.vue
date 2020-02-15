<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Tabbar'
}
</script>

<style>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: .5rem 0;
  background-color: #fff;
  box-shadow: 0 -5px 10px rgba(100,100,100,.1);
}
</style>