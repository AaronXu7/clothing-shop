<template>
    <div id="detail">
        <!-- 导航条 -->
        <detail-nav-bar ref="navbar" @currentClick="currentClick"/>
        <scroll class="scroll-height" ref="scroll"
                                    :probe-type="3" 
                                    @scroll="contentScroll">
            <!-- 轮播图 -->
            <detail-swiper :banner="topImage"/>
            <!-- 商品信息 -->
            <detail-msg :product="product"/>
            <!-- 店家信息 -->
            <detail-shop :shopInfo="shopInfo"/>
            <!-- 尺码参数 -->
            <detail-size-info ref="toSize" :productInfo="productInfo"/>
            <!-- 图片详情 -->
            <detail-info :detailInfo="detailInfo" @imgItemLoad="imgItemLoad"/>
            <!-- 买家评论 -->
            <detail-comment ref="toComment" :comment="comment"/>
            <!-- 推荐 -->
            <products-list ref="toRecommend" :products="recommend"/>
        </scroll>
        <detail-tabbar @toCart="toCart"/>
        <!-- 回到顶部 -->
        <back-top @click.native="backTop" :topA="topA" v-show="showBackTop"/>
    </div>
</template>

<script>
import Scroll from 'common-cpn/scroll/Scroll'
import ProductsList from 'content-cpn/products/ProductsList'

import DetailNavBar from './childCpn/DetailNavBar'
import DetailSwiper from './childCpn/DetailSwiper'
import DetailMsg from './childCpn/DetailMsg'
import DetailShop from './childCpn/DetailShop'
import DetailSizeInfo from './childCpn/DetailSizeInfo'
import DetailInfo from './childCpn/DetailInfo'
import DetailComment from './childCpn/DetailComment'
import DetailTabbar from './childCpn/DetailTabbar'

import { debounce } from 'common/js/utils.js'
import { itemImgListenerMixin,backTop } from 'common/js/mixin.js'
import { mapActions } from 'vuex'

import {
    getDetail,
    getRecommend,
    Product,
    ProductInfo,
    Shop
} from 'network/detail'

export default {
    name:'Detail',
    components:{
        DetailTabbar,
        DetailComment,
        DetailSizeInfo,
        DetailInfo,
        DetailNavBar,
        DetailSwiper,
        DetailMsg,
        DetailShop,
        Scroll,
        ProductsList
    },
    data(){
        return {
            iid:null,
            topImage:[],
            product:{},
            shopInfo:{},
            detailInfo:{},
            productInfo:{},
            comment:{},
            recommend:[],
            itemImgListener:null,
            scrollPos:null,
            divY:[0],
            currentPos:0,
            counter:0
        }
    },
    created(){
        // 获取商品id
        this.iid = this.$route.params.iid
        // 获取商品数据
        this.getDetail()
        // 获取推荐数据
        this.getRecommend()
        
        this.scrollPos = debounce(() => {
            this.divY.push(this.$refs.toSize.$el.offsetTop)
            this.divY.push(this.$refs.toComment.$el.offsetTop)
            this.divY.push(this.$refs.toRecommend.$el.offsetTop)
            this.divY.push(Number.MAX_VALUE)
        },50)
    },
    mixins:[itemImgListenerMixin,backTop],
    methods:{
        ...mapActions(['addCart']),
        imgItemLoad(counter){
            if(++this.counter == counter){
                const refresh = debounce(this.$refs.scroll.refresh,50)
                this.scrollPos()
                refresh()
            }
        },
        currentClick(index){
            this.$refs.scroll.scrollTo(0,-(this.divY[index] - 44),2000)
        },
        contentScroll(pos){
            const positionY = -pos.y+44
            let length = this.divY.length
            for(let i = 0;i < length - 1;i++){
                if(this.currentPos !== i && positionY >= this.divY[i] && positionY < this.divY[i+1]){
                    this.currentPos = i
                    this.$refs.navbar.currentIndex = this.currentPos
                }
            }
            // 监听返回顶部按键是否显示
            this.showBack(pos)
        },
        toCart(){
            // 添加购物车
            let product = {}
            product.title = this.product.title
            product.img = this.topImage[0]
            product.iid = this.iid
            product.price = this.product.lowPrice
            product.checked = true
            this.addCart(product).then(res =>{
                this.$toast.show(res,1000)
            })
        },
        getDetail(){
            getDetail(this.iid).then(res => {
                const data = res.data.result
                // 获取轮播图图片
                this.topImage = data.itemInfo.topImages
                // 获取商品数据
                this.product = new Product(data.itemInfo,data.columns,data.shopInfo.services)
                // 获取商店数据
                this.shopInfo = new Shop(data.shopInfo)
                // 获取商品参数
                this.productInfo = new ProductInfo(data.itemParams)
                // 获取商品详情
                this.detailInfo = data.detailInfo
                // 获取商品评论
                if(data.rate.cRate != 0){
                    this.comment = data.rate.list[0]
                }
            }).catch(err => {
                console.log(err);
            })
        },
        getRecommend(){
            getRecommend().then(res =>{
                this.recommend = res.data.data.list
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style lang="less">
    #detail{
        position: relative;
        z-index: 1;
        background-color: #fff;
        .scroll-height{
            height: calc(100vh - 99px);
            overflow: hidden;
        }
        h3{
            text-align: center;
            color:@main-color;
        }
    }
</style>