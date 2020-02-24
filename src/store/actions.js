import { ADD_COUNT,ADD_TO_CART } from './mutation-types'

export default {
    // 添加购物车
    addCart(context,payload){
        return new Promise((resolve,reject) => {
            let haveProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if(haveProduct){
                context.commit(ADD_COUNT,haveProduct)
                resolve('当前商品数量+1')
            }else{
                payload.count = 1
                context.commit(ADD_TO_CART,payload)
                resolve('添加购物车成功')
            }
        })
    }
}