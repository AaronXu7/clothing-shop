<template>
    <swiper :banner="banner">
        <swiper-item v-for="(item,index) in banner" :key="index" :banner="banner">
            <a :href="item.link">
                <img :src="item.image" :alt="item.title">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'common-cpn/swiper'

export default {
    name:'HomeSwiper',
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>