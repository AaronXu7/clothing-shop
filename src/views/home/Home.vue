<template>
  <div id="home">
      <!-- 导航nav -->
      <navbar>
        <template v-slot:center>
          <h4>购物街</h4>
        </template>
      </navbar>
      <!-- 首页轮播图 -->
      <home-swiper :banner="banner"/>
      <!-- 推荐 -->
      <recommend-view :recommend="recommend"/>
      <!-- 本周流行 -->
      <pop-view :pop8="pop8"/>
      <!-- 产品展示 -->
      <tab-control :sorttitle="sorttitle"/>
      <products-list :products="products['new'].list"/>
  </div>
</template>

<script>
import Navbar from 'common-cpn/navbar/Navbar'
import TabControl from 'content-cpn/tabs/TabControl'
import ProductsList from 'content-cpn/products/ProductsList'

import HomeSwiper from './childCpn/HomeSwiper'
import RecommendView from './childCpn/RecommendView'
import PopView from './childCpn/PopView'

import {
    getHomeMultiData,
    getHomePopData,
    getHomeProducts
} from 'network/home'

export default {
    name:'Home',
    components:{
      Navbar,
      HomeSwiper,
      RecommendView,
      PopView,
      TabControl,
      ProductsList
    },
    data(){
      return {
        banner:[],
        recommend:[],
        pop8:[],
        products:{
          'pop':{ page:0,list:[] },
          'new':{ page:0,list:[] },
          'sell':{ page:0,list:[] }
        },
        sorttitle:[]
      }
    },
    created(){
      // 获取首页轮播图以及推荐数据
      this.getHomeMultiData()
      // 获取流行分类前八个产品数据
      this.getHomePopData()
      // 获取产品分类数据
      this.getHomeProducts('pop')
      this.getHomeProducts('new')
      this.getHomeProducts('sell')
    },
    methods:{
      getHomeMultiData(){
        getHomeMultiData().then(res => {
          this.banner = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        }).catch(err => {
          console.log(err)
        })
      },
      getHomePopData(){
        getHomePopData().then(res =>{
          this.pop8 = res.data.data.list.slice(0,8)
          // 获取产品分类名
          this.sorttitle.push(...res.data.data.filter.list)
        }).catch(err => {
          console.log(err)
        })
      },
      getHomeProducts(type){
        const page = this.products[type].page + 1;
        getHomeProducts(type,page).then(res => {
          this.products[type].list.push(...res.data.data.list)
          this.products[type].page += 1
        }).catch(err => {
          console.log(err)
        })
      }
    }
}
</script>

<style lang="less">
  #home{
    margin-top: 44px;
    .navbar{
      background-color: @main-color;
      color:#fff;
    }
  }
</style>