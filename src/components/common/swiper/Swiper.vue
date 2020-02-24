<template>
  <div class="swiper-container" :style="{height:Height + 'px'}">
      <div class="swiper-items" :style="swiperClick(currentIndex)"  >
          <slot></slot>
      </div>
      <div class="swiper-navigation">
            <label for="dot1" v-for="(item,index) in banner" :key="index" 
                            @click="swiperClick(index)" 
                            :class="{isHover:currentIndex == index}">
            </label>
      </div>
  </div>
</template>

<script>
export default {
    name:'Swiper',
    props:{
        Interval:{
            type:Number,
            default:3000
        },
        Autoplay:{
            type:Boolean,
            default:true
        },
        Height:{
            type:Number,
            default:200
        },
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        swiperClick(index){
            let num = (100/this.banner.length).toFixed(3)*index
            this.currentIndex = index
            return {transform:'translateX(-'+num+'%)',width: 100 * this.banner.length + '%'}
        }
    },
    mounted(){
        if(this.Autoplay){
            setInterval(()=>{
                if(this.currentIndex >= (this.banner.length - 1)){
                    this.currentIndex = 0
                }else{
                    this.currentIndex++
                }
            },this.Interval)
        }
    }
}
</script>

<style lang="less">
    .swiper-container{
        position: relative;
        overflow: hidden;
        .swiper-items{
            position: absolute;
            height: 100%;
            display: flex;
            transition: .5s;
        }
        .swiper-navigation{
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            label{
                cursor: pointer;
                width: 12px;
                height: 12px;
                margin: 5px;
                background-color: #fff;
                border-radius:50%;
                transition:.4s;
            }
            .isHover{
                background-color: @main-color;
            }
        }
    }
</style>