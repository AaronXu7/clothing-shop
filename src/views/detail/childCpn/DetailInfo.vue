<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
      <p>{{detailInfo.desc}}</p>
      <div class="info-img" v-for="item in detailInfo.detailImage" :key="item.index">
        <h3>{{item.key}}</h3>
        <img v-for="inneritem in item.list" :key="inneritem.index" :src="inneritem" :alt="item.key" @load="imgLoad(item.list.length)">
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailInfo',
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgLoad(counter){
            this.$emit('imgItemLoad',counter)
        }
    }
}
</script>

<style lang="less">
    .detail-info{
        padding: 1rem .5rem;
        border-top: 10px solid @border-color;
        border-bottom: 10px solid @border-color;
        p{
            border: 1px dashed @main-color;
            padding: 1rem;
        }
        .info-img{
            img{
                width: 100%;
            }
        }
    }
</style>