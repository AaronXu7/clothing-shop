<template>
  <div class="back-top">
      <i class="fas fa-arrow-up fa-lg" :class="{'top-animation' : topA}"></i>
  </div>
</template>

<script>
export default {
    name:'BackTop',
    props:{
        topA:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="less">
    .back-top{
        height: 45px;
        width: 45px;
        position: fixed;
        right: 5px;
        bottom: 60px;
        color:@main-color;
        border-radius:50%;
        background-color: #fff;
        box-shadow: 2px 0 10px rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        .top-animation{
            animation: top .4s linear 0s infinite alternate;
        }
    }
    @keyframes top{
        0%{transform: translateY(5px);}
        50%{transform: translateY(0);}
        100%{transform: translateY(-5px);}
    }
</style>