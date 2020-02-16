<template>
  <div class="pop-views">
      <h3>本周流行</h3>
      <div class="pop-items">
        <a class="pop-item" v-for="(item,index) in pop8" :key="index">
            <!-- <img class="pop-img" :src="item.show.img " alt=""> -->
            <div class="pop-img" :style="{backgroundImage: 'url(' + item.show.img + ')'}"></div>
            <h5>{{item.title}}</h5>
        </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"PopView",
    props:{
        pop8:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
    .pop-views{
        h3{
            text-align: center;
            margin: 1.5rem;
        }
        .pop-items{
            display: flex;
            flex-wrap: wrap;
            .pop-item{
                text-decoration:none;
                text-align: center;
                flex: 0 0 25%;
                padding-bottom: 1.5rem;
                .pop-img{
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    border-radius:50%;
                    width: 80px;
                    height: 80px; 
                    margin: 0 auto;
                }
                h5{
                    color:#666;
                    margin: 0;
                    width: 80px; 
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    margin: 0 auto;
                }
            }
        }
    }
</style>