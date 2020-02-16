<template>
  <div id="home">
      <!-- 导航nav -->
      <navbar>
        <template v-slot:center>
          <h4>购物街</h4>
        </template>
      </navbar>
      <!-- 产品tab 吸附时显示 -->
      <tab-control :sorttitle="sorttitle" 
                  @itemClick="itemClick" 
                  ref="tabHeight1"
                  v-show="tabFixed.isFixed"/>
      <scroll class="scroll-height" ref="scroll" 
                                    :probe-type="3" 
                                    :pull-up-load="true" 
                                    @scroll="contentScroll"
                                    @pullUp="loadMore">
        <!-- 首页轮播图 -->
        <home-swiper :banner="banner"/>
        <!-- 推荐 -->
        <recommend-view :recommend="recommend"/>
        <!-- 本周流行 -->
        <pop-view :pop8="pop8"/>
        <!-- 产品展示 -->
        <tab-control :sorttitle="sorttitle" 
                      @itemClick="itemClick" 
                      ref="tabHeight2"
                      v-show="!tabFixed.isFixed"/>
        <products-list :products="showTab"/>
      </scroll>
      <!-- 回到顶部 -->
      <back-top @click.native="backTop" :topA="topA" v-show="showBackTop"/>
  </div>
</template>

<script>
import Navbar from 'common-cpn/navbar/Navbar'
import TabControl from 'content-cpn/tabs/TabControl'
import ProductsList from 'content-cpn/products/ProductsList'
import Scroll from 'common-cpn/scroll/Scroll'
import BackTop from 'content-cpn/backTop/BackTop'

import HomeSwiper from './childCpn/HomeSwiper'
import RecommendView from './childCpn/RecommendView'
import PopView from './childCpn/PopView'

import {
    getHomeMultiData,
    getHomePopData,
    getHomeProducts
} from 'network/home'

import { debounce } from 'common/js/utils.js'

export default {
    name:'Home',
    components:{
      Navbar,
      HomeSwiper,
      RecommendView,
      PopView,
      TabControl,
      ProductsList,
      Scroll,
      BackTop
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
        sorttitle:[{
          'sort':'pop'
        }],
        currentIndex:0,
        showBackTop:false,
        topA:false,
        tabFixed:{
          loadHeight:true,
          tabOffsetHeight:0,
          isFixed:false
        }
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
    mounted(){
      // 监听图片加载
      const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('imgLoad',() => {
        refresh()
      })
    },
    updated(){
      if(this.tabFixed.loadHeight) {
        setTimeout(()=>{
          this.tabFixed.tabOffsetHeight = this.$refs.tabHeight2.$el.offsetTop - 44
        },500)
        this.tabFixed.loadHeight = false
      }
    },
    methods:{
      // 事件监听
      itemClick(index){
        this.currentIndex = index
        this.$refs.tabHeight1.currentIndex = index
        this.$refs.tabHeight2.currentIndex = index
      },
      backTop(){
        this.topA = true
        this.$refs.scroll.scrollTo(0,0,1000)
        setTimeout(()=>{
          this.topA = false
        },500)
      },
      contentScroll(pos){
        // 监听返回顶部按键是否显示
        this.showBackTop = (-pos.y) > 500
        // 监听产品Tab是否吸附
        if (this.tabFixed.tabOffsetHeight != 0) this.tabFixed.isFixed = (-pos.y) > this.tabFixed.tabOffsetHeight
      },
      loadMore(){
        this.getHomeProducts(this.sorttitle[this.currentIndex].sort)
      },
      //网络请求 
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
          this.sorttitle.splice(0,1,...res.data.data.filter.list)
        }).catch(err => {
          console.log(err)
        })
      },
      getHomeProducts(type){
        const page = this.products[type].page + 1;
        getHomeProducts(type,page).then(res => {
          this.products[type].list.push(...res.data.data.list)
          this.products[type].page += 1
          this.$refs.scroll.finishPullUp()
        }).catch(err => {
          console.log(err)
        })
      }
    },
    computed:{
      showTab(){
        const type = this.sorttitle[this.currentIndex].sort
        return this.products[type].list
      }
    }
}
</script>

<style lang="less">
  #home{
    .navbar{
      background-color: @main-color;
      color:#fff;
    }
    .scroll-height{
      height: calc(100vh - 99px);
      overflow: hidden;
    }
  }
</style>