<template>
    <div class="swiper-item" :style="itemWidth()">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'SwiperItem',
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        itemWidth(){
            return {width:(100/this.banner.length).toFixed(3)+"%"}
        }
    }
}
</script>

<style lang="less">
    .swiper-item{
        flex: none;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>