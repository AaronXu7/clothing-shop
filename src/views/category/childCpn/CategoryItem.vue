<template>
  <div class="items">
      <a class="category-item" v-for="item in sub" :key="item.index"
                                :href="item.link">
          <img :src="item.image" :alt="item.title">
          <h5>{{item.title}}</h5>
      </a>
  </div>
</template>

<script>
export default {
    name:'CategoryItem',
    props:{
        sub:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
    .items{
        display: flex;
        flex-wrap: wrap;
        padding: 1rem;
        .category-item{
            flex: 0 0 33%;
            text-align: center;
            text-decoration: none;
            color:@main-color;
            img{
                width: 100%;
            }
            h5{
                margin: 0.5rem;
            }
        }
    }
</style>