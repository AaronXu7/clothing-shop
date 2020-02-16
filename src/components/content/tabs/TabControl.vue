<template>
  <div class="tab-control">
      <div class="tab-item" v-for="(item,index) in sorttitle" :key="index" 
                            @click="itemClick(index)"
                            :class="{isAcitve:currentIndex == index}">
          <span>{{item.title}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        sorttitle:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('itemClick',index)
        }
    }
}
</script>

<style lang="less">
    .tab-control{
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        padding: .5rem 0;
        .tab-item{
            text-align: center;
            padding: .5rem;
        }
        .isAcitve{
            color:@main-color;
            border-bottom: 3px solid @main-color;
        }
    }
</style>