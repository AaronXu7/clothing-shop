<template>
    <div class="cart-item">
        <cart-radio @click.native="radioClick" :is-checked="product.checked"/>
        <img :src="product.img" :alt="product.title">
        <div class="item-text">
            <h5>{{product.title}}</h5>
            <div class="item-price">
                <span>￥{{product.price * product.count}}</span>
                <span>x{{product.count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import CartRadio from './CartRadio'

export default {
    name:'CartItem',
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        CartRadio
    },
    methods:{
        radioClick(i){
            if(this.product != {}){
                this.product.checked = !this.product.checked
            }
        }
    }
}
</script>

<style lang="less">
    .cart-item{
        display: flex;
        align-items: center;
        padding: .5rem 0;
        border-bottom: 1px solid @border-color;
        img{
            height: 120px;
            width: 80px;
            border-radius: 5px;
        }
        .item-text{
            padding: 0 .5rem;
            h5{
                .multi-ellipsis(3);
            }
            .item-price{
                display: flex;
                justify-content: space-between;
                color:@main-color;
            }
        }
    }
</style>