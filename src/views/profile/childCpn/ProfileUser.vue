<template>
  <div class="user">
      <img :src="userInfo.image" :alt="userInfo.name">
      <h4 v-if="userInfo.name != ''">{{userInfo.name}}</h4>
      <div v-else class="login-btn" @click="isShow = !isShow">
          登录/注册
      </div>
      <div v-show="this.isShow" class="login">
          <div class="login-close">
              <i class="far fa-user"></i>
              <i class="fas fa-times" @click="isShow = false"></i>
          </div>
          <div class="login-form">
                <input type="text" name="userId" placeholder="请输入账号">
                <input type="password" name="password" placeholder="请输入密码">
                <input type="submit" value="登录">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'ProfileUser',
    props:{
        userInfo:{
            type:Object,
            default(){
                return {
                    name:'',
                    image:require('@/assets/img/user.jpg')
                }
            }
        }
    },
    data(){
        return {
            isShow:false
        }
    }
}
</script>

<style lang="less">
    .user{
        background-color: @main-color;
        display: flex;
        padding: 1rem 2rem;
        justify-content: space-between;
        align-items: center;
        img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            box-shadow: 2px 0 5px @border-color;
        }
        h4,.login-btn{
            color:#fff
        }
        .login{
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            .login-close{
                background-color:#fff;
                padding: .5rem;
                display: flex;
                justify-content: space-between;
                border: 1px solid;
                border-bottom:none; 
            }
            .login-form{
                padding: 1rem;
                background-image: linear-gradient(#e66465, @main-color);
                border: 1px solid;
                border-top:none; 
                input{
                    margin: 0.5rem 0;
                    border: none;
                    padding: .5rem;
                    border-radius: 5px;
                }
            }
        }
    }
</style>