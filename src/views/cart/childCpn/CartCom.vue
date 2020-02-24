<template>
  <div class="cart-com">
      <div class="com-all">
          <cart-radio :is-checked="selectAll" @click.native="selectClick"/>
            合计：￥{{totalPrice}}
      </div>
      <div class="com-btn">
          去结算{{totalNum}}
      </div>
  </div>
</template>

<script>
import CartRadio from './CartRadio'

export default {
    name:'CartCom',
    components:{
        CartRadio
    },
    methods:{
        selectClick(){
            if(this.selectAll){
                this.$store.state.cartList.forEach(item => item.checked = false)
            }else{
                this.$store.state.cartList.forEach(item => item.checked = true)
            }
        }
    },
    computed:{
        totalPrice(){
            return this.$store.state.cartList.filter(item => {return item.checked}).reduce((pre,cur)=>{
                return pre + cur.count * cur.price
            },0)
        },
        totalNum(){
            return '(' + this.$store.state.cartList.filter(item => {return item.checked}).length + ')'
        },
        selectAll(){
            if(this.$store.state.cartList.length === 0) return false
            return !this.$store.state.cartList.find(item => !item.checked)
        }
    }
}
</script>

<style lang="less">
    .cart-com{
        position: fixed;
        bottom: 55px;
        left: 0;
        right: 0;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: whitesmoke;
        .com-all{
            display: flex;
        }
        .com-btn{
            background-color: @main-color;
            color:#fff;
            height: 100%;
            line-height: 40px;
            padding: 0 .5rem;
        }
    }
</style>