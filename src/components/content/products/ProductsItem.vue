<template>
  <div class="products-item" @click="toDetail">
      <div class="products-padding">
            <img :src="showImg" :alt="productsItem.title" @load="imgLoad">
            <p>{{productsItem.title}}</p>
            <h5>
                {{productsItem.orgPrice || productsItem.discountPrice}}
                <span>
                    <i class="fas fa-star"></i>
                    {{productsItem.cfav}}
                </span>
            </h5>
      </div>
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
    },
    methods:{
        imgLoad(){
            this.$bus.$emit('imgLoad')
        },
        toDetail(){
            if(this.productsItem.iid){
                this.$router.push('/detail/' + this.productsItem.iid)
            }else{
                window.location.href = this.productsItem.item_url
            }
        }
    },
    computed:{
        showImg(){
            return this.productsItem.image || this.productsItem.show.img
        }
    }
}
</script>

<style lang="less">
    .products-item{
        flex: 0 0 50%;
        .products-padding{
            padding:.5rem;
        }
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
                font-size: 12px;
                .fas{
                    color:#FFCC00;
                }
            }
        }
    }
</style>