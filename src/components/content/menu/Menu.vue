<template>
    <tabbar>
        <tabbar-item path="/home"></tabbar-item>
        <tabbar-item path="/category" menu="分类" menuIcon="th-large fas"></tabbar-item>
        <tabbar-item class="shopping-cart" path="/cart" menu="购物车" menuIcon="shopping-cart fas">
            <div class="cart-length" v-if="cartLength > 0">{{cartLength}}</div>
        </tabbar-item>
        <tabbar-item path="/profile" menu="我的" menuIcon="user fas"></tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar,TabbarItem } from 'common-cpn/tabbar'

import { mapGetters } from 'vuex'

export default {
    name:'Menus',
    components:{
        Tabbar,
        TabbarItem
    },
    computed:{
        ...mapGetters(['cartLength'])
    }
}
</script>

<style lang="less">
    .shopping-cart{
        position: relative;
        .cart-length{
            position: absolute;
            top: -7px;
            right: 0;
            background-color: #CC3333;
            color: #fff;
            width: 15px;
            height: 15px;
            font-size: 14px;
            border-radius: 50%;
        }
    }

</style>