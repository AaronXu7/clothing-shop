<template>
  <div class="cart-list">
      <cart-item v-for="item in cartProduct" :key="item.index" :product="item"/>
  </div>
</template>

<script>
import CartItem from './CartItem';

import { mapGetters } from 'vuex'

export default {
    name:'CartList',
    components:{
        CartItem
    },
    computed:{
      ...mapGetters(['cartProduct'])
    }
}
</script>

<style lang="less">

</style>