<template>
  <div class="products">
      <products-item v-for="(item,index) in products" :key="index" :products-item="item"/>
  </div>
</template>

<script>
import ProductsItem from './ProductsItem'

export default {
    name:'ProductsList',
    props:{
        products:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        ProductsItem
    }
}
</script>

<style lang="less">
    .products{
        display: flex;
        flex-wrap: wrap;
    }
</style>