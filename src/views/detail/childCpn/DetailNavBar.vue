<template>
    <navbar>
        <template v-slot:left>
            <div @click="Back">
                <i class="fas fa-chevron-left"></i>
            </div>
        </template>
        <template v-slot:center>
            <div class="detail-navs">
                <div v-for="(item,index) in title" :key="index" 
                    @click="currentClick(index)"
                    class="detail-nav"
                    :class="{active : index == currentIndex}">
                    {{item}}
                </div>
            </div>
        </template>
    </navbar>
</template>

<script>
import Navbar from 'common-cpn/navbar/Navbar'

export default {
    name:'DetailNavBar',
    components:{
        Navbar
    },
    data(){
        return {
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        Back(){
            this.$router.back()
        },
        currentClick(index){
            this.currentIndex = index
            this.$emit('currentClick',index)
        }
    }
}
</script>

<style lang="less">
    .detail-navs{
        display: flex;
        .detail-nav{
            flex: 1;
            font-size: 14px;
        }
        .active{
            color:@main-color;
        }
    }
</style>