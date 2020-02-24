<template>
    <swiper :banner="banner" :Height="395">
        <swiper-item v-for="(item,index) in banner" :key="index" :banner="banner">
            <img :src="item">
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'common-cpn/swiper'

export default {
    name:'DetailSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
    
</style>