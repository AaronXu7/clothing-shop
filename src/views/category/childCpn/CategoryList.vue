<template>
  <div class="list-tab">
      {{list.title}}
  </div>
</template>

<script>
export default {
    name:'CategoryList',
    props:{
        list:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="less">
    .list-tab{
        background-color: #fff;
        color:@main-color;
        border-bottom:2px solid @border-color;
        text-align: center;
        padding: 1rem 0; 
    }
</style>