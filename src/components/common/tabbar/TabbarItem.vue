<template>
    <div class="tabbar-item" :class="{isCurrent:isActive}" @click="itemClick">
        <i class="fa-lg" :class="'fa-'+menuIcon"></i>
        <div class="tabbar-name">{{menu}}</div>
        <slot/>
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
                return 'home fas'
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
            if(this.path !== undefined && this.$route.path != this.path){
                this.$router.replace(this.path)
            }
            this.$emit('itemClick')
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