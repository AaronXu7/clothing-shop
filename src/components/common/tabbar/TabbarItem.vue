<template>
    <div class="tabbar-item" :class="{isCurrent:isActive}" @click="itemClick">
        <i class="fas fa-lg" :class="'fa-'+menuIcon"></i>
        <div class="tabbar-name">{{menu}}</div>
    </div>
</template>

<script>
export default {
    name:'TabbarItem',
    props:{
        path:String,
        menu:{
            type:String,
            default(){
                return '首页'
            }
        },
        menuIcon:{
            type:String,
            default(){
                return 'home'
            }
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods:{
        itemClick(){
            if(this.$route.path != this.path){
                this.$router.replace(this.path)
            }
        }
    }
}
</script>

<style lang="less">
    .tabbar-item{
        text-align: center;
    }
    .tabbar-name{
        line-height: 1.5;
        font-size: 14px;
    }
    .isCurrent{
        color: @main-color;
    }
</style>