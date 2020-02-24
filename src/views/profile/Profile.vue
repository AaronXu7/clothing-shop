<template>
  <div id="profile">
      <navbar class="navbar">
        <template v-slot:center>
          <h4>个人中心</h4>
        </template>
      </navbar>
      <profile-user/>
      <profile-list/>
  </div>
</template>

<script>
import Navbar from 'common-cpn/navbar/Navbar'

import ProfileUser from './childCpn/ProfileUser'
import ProfileList from './childCpn/ProfileList'

export default {
    name:'Profile',
    components:{
      Navbar,
      ProfileUser,
      ProfileList
    }
}
</script>

<style lang="less">
  #profile{
    .navbar{
      color:#fff;
      background-color: @main-color;
    }
  }
</style>