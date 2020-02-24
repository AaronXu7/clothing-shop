<template>
  <div class="profile-list">
      <div class="list" v-for="item in list" :key='item.index'>
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
    name:'ProfileList',
    data(){
        return {
            list:['我的余额','我的优惠券','用户信息','个人设置']
        }
    }
}
</script>

<style lang="less">
    .profile-list{
        .list{
            border-bottom:1px solid @border-color;
            padding: .5rem 1rem;
        }
    }
</style>