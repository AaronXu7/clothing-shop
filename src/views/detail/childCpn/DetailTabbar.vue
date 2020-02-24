<template>
    <tabbar class="detail-tabbar">
        <tabbar-item menu="客服" menuIcon="comments far"></tabbar-item>
        <tabbar-item menu="店铺" menuIcon="store fas"></tabbar-item>
        <tabbar-item menu="收藏" :menuIcon="faChange" @itemClick="faClick"></tabbar-item>
        <div class="tabbar-btns">
            <div class="tabbar-btn" @click="toCart">加入购物车</div>
            <div class="tabbar-btn">购买</div>
        </div>
    </tabbar>
</template>

<script>
import {Tabbar,TabbarItem} from 'common-cpn/tabbar'

export default {
    name:'DetailTabbar',
    components:{
        Tabbar,
        TabbarItem
    },
    data(){
        return {
            star:false
        }
    },
    methods:{
        faClick(){
            this.star = !this.star
        },
        toCart(){
            this.$emit('toCart')
        }
    },
    computed:{
        faChange(){
            if(this.star){
                return 'star fas'
            }else{
                return 'star far'
            }
        }
    }
}
</script>

<style lang="less">
    .detail-tabbar{
        padding: 0;
        height: 55px;
        align-items: center;
        justify-content: space-between;
        .tabbar-item{
            margin-top: .2rem;
            padding: 0 1rem;
            color:#333;
            .fa-comments{
                color:@main-color;
            }
            .fa-star{
                color:yellow
            }
        }
        .tabbar-btns{
            display: flex;
            .tabbar-btn{
                background-color:@main-color;
                color:#fff;
                height: 55px;
                line-height: 55px;
                padding: 0 1rem;
                &:last-of-type{
                    background-color: #ffff01;
                }
            }
        }
    }
</style>