<template>
  <div class="products-item">
      <img :src="productsItem.show.img" :alt="productsItem.title">
      <p>{{productsItem.title}}</p>
      <h5>
        {{productsItem.orgPrice}}
        <span>
            <i class="fas fa-star"></i>
            {{productsItem.cfav}}
        </span>
      </h5>
  </div>
</template>

<script>
export default {
    name:'ProductsItem',
    props:{
        productsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="less">
    .products-item{
        flex: 0 0 50%;
        img{
            width: 100%;
            height: 280px;
            border-radius: 10px;
        }
        p{
            margin: .2rem 0;
            font-size:14px;
            .multi-ellipsis()
        }
        h5{
            text-align: center;
            font-size:16px;
            margin: .5rem 0;
            color:@main-color;
            span{
                color:#333;
                .fas{
                    color:yellow;
                }
            }
        }
    }
</style>