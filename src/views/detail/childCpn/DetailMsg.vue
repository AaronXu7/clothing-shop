<template>
  <div v-if="Object.keys(product).length !== 0" class="detail-msg">
      <h4>{{product.title}}</h4>
      <div class="msg-pirce">
          {{product.newPrice}}
          <span>
              {{product.oldPrice}}
          </span>
          <span :style="{backgroundColor:product.descColor}">
              {{product.desc || '新品上市'}}
          </span>
      </div>
      <div class="msg-info">
          <p>{{product.columns[0]}}</p>
          <p>{{product.columns[1]}}</p>
          <p>{{product.services[0].name}}</p>
      </div>
      <div class="msg-tips">
          <div v-for="(item,index) in product.services" :key="index" 
                v-show="index !== 0">
              <img :src="item.icon">
                {{item.name}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailMsg',
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="less">
    .detail-msg{
        padding: 0 .5rem;
        h4{
            padding: .5rem 0;
            margin: 0;
        }
        .msg-pirce{
            font-size: 20px;
            color: @main-color;
            span{
                &:first-of-type{
                    font-size: 16px;
                    color:#999;
                    text-decoration: line-through;
                }
                &:last-of-type{
                    color: #fff;
                    font-size: 14px;
                    border-radius: 10px;
                    vertical-align: super;
                    padding: 0 5px;
                }
            }
        }
        .msg-info{
            display: flex;
            justify-content: space-between;
            p{
                color: #666;
                font-size: 14px;
            }
        }
        .msg-tips{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-top: 1rem;
            border-top: 1px solid #999;
            div{
                font-size: 14px;
                display: flex;
                align-items: center;
                padding-bottom: 1rem;
                img{
                    width: 15px;
                    padding-right: .5rem;
                }
            }
        }
    }
</style>