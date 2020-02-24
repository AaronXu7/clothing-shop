<template>
  <div v-if="Object.keys(productInfo).length !== 0" class="detail-size">
      <h3>尺码&amp;产品参数</h3>
        <table class="size" border="0">
            <tr v-for="item in productInfo.size" :key="item.index">
                <td v-for="(innerItem,index) in item" :key="innerItem.index" :style="{fontWeight: (index == 0 ? 'bold':'')}">{{innerItem}}</td>
            </tr>
        </table>
        <table class="key-params" border="0">
            <tr v-for="item in productInfo.params" :key="item.index">
                <td>{{item.key}}</td>
                <td>{{item.value}}</td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
    name:'DetailSizeInfo',
    props:{
        productInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="less">
    .detail-size{
        padding: 1rem 2rem;
        .size{
            width: 100%;
            font-size: 14px;
        }
        td{
            padding:.5rem 0;
            border-bottom:1px solid @border-color; 
        }
        .key-params{
            td:first-of-type{
                font-weight: bold;
                width: 81px;
            }
            td:last-of-type{
                color:@main-color;
            }
        }
    }
</style>