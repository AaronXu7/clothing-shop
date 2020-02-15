<template>
    <div class="recommend-views">
        <a class="recommend-view" v-for="(item,index) in recommend" :key="index" :href="item.link">
            <img :src="item.image" :alt="item.title">
            <h5>{{item.title}}</h5>
        </a>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
    .recommend-views{
        display:flex;
        padding: 1rem 0;
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        .recommend-view{
            text-align: center;
            text-decoration: none;
            img{
                width: 95%
            }
            h5{
                margin: .2rem 0;
                color:#333;
            }
        }
    }
</style>