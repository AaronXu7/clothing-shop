<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="detail-shop">
      <div class="shop-info">
        <div class="shop-name">
            <img :src="shopInfo.logo" :alt="shopInfo.name">
            {{shopInfo.name}}
        </div>
        <div class="shop-fans">
            {{shopInfo.fans | CNumber}}
            <span>人关注</span>
        </div>
      </div>
      <div class="shop-eval">
          <div class="shop-num">
              <span>{{shopInfo.sell | CNumber}}</span>
              <h5>总销量</h5>
          </div>
          <div class="shop-num">
              <span>{{shopInfo.goods | CNumber}}</span>
              <h5>全部宝贝</h5>
          </div>
          <div class="shop-score">
              <div class="score" v-for="item in shopInfo.score" :key="item.index">
                  <span class="score-text">{{item.name}}</span>
                  <div class="score-color" :class="{isBetter:item.isBetter}">
                    <span>{{item.score}}</span>
                    <span>{{item.isBetter ? '高' : '低'}}</span>
                  </div>
                  
              </div>
          </div>
      </div>
      <a class="shop-btn" :href="shopInfo.link">进入店铺</a>
  </div>
</template>

<script>
export default {
    name:'DetailShop',
    props:{
        shopInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        CNumber(num){
            let showNum = num
            if(num > 10000){
                showNum = (num / 10000).toFixed(2) + '万'
            }
            return showNum
        }
    }
    
}
</script>

<style lang="less">
    .detail-shop{
        padding: 1rem;
        border-top:10px solid @border-color;
        border-bottom:10px solid @border-color; 
        .shop-info{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .shop-name{
                display: flex;
                align-items: center;
                color: @main-color;
                font-size: 20px;
                img{
                    width: 50px;
                    border-radius: 50%;
                    box-shadow: 1px 1px 4px @main-color;
                    margin-right: .5rem;
                }
            }
            .shop-fans{
                color:@main-color;
                font-size:16px;
                span{
                    font-size:14px;
                    color:#333;
                }
            }
        }
        .shop-eval{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
            .shop-num{
                text-align: center;
                padding: 0 .5rem;
                span{
                    font-size: 20px;
                }
                h5{
                    margin: .5rem;
                }
            }
            .shop-score{
                padding-left: 1rem;
                border-left: 1px solid @border-color;
                .score{
                    display: flex;
                    align-items: center;
                    padding: .5rem 0;
                    .score-text{
                        margin-right: .5rem;
                    }
                    .score-color{
                        color:#33CC33;
                        display: flex;
                        justify-content: space-between;
                        flex: 1;
                        span:last-of-type{
                            margin-left: 10px;
                            color:#fff;
                            background-color: #33CC33;
                        }
                    }
                    .isBetter{
                        color:#FF0033;
                        span:last-of-type{
                            color:#fff;
                            background-color: #FF0033;
                        }
                    }
                }
            }
        }
        .shop-btn{
            background-color: @border-color;
            border-radius:10px;
            color:@main-color;
            text-decoration: none;
            display: block;
            width: 120px;
            margin: 1rem auto 0;
            text-align: center;
            padding: .5rem;
        }
    }
</style>