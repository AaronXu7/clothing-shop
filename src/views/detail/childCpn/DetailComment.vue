<template>
  <div v-if="Object.keys(comment).length !== 0" class="detail-comment">
      <div class="comment-title">
          <h4>用户评价</h4>
          <a href="">
              更多+
          </a>
      </div>
      <div class="comment-text">
          <div class="comment-user">
              <img :src="comment.user.avatar" :alt="comment.user.uname">
              {{comment.user.uname}}
          </div>
          <p>{{comment.content}}</p>
          <h6>{{comment.created | showDate}}   {{comment.style}}</h6>
          <div class="comment-img">
              <img v-for="item in comment.images" :key="item.index" :src="item">
          </div>
      </div>
  </div>
</template>

<script>
import { formatDate } from 'common/js/utils.js'

export default {
    name:'DetailComment',
    props:{
        comment:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        showDate(value){
            let date = new Date(value * 1000)
            return formatDate(date,'YYYY-MM-DD hh:mm:ss')
        }
    }
}
</script>

<style lang="less">
    .detail-comment{
        padding: 1rem .5rem;
        border-bottom: 10px solid @border-color; 
        .comment-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 1rem;
            border-bottom: 2px solid @border-color; 
            h4{
                margin: 0;
            }
            a{
                text-decoration: none;
                color:@main-color;
            }
        }
        .comment-text{
            padding: 1rem 0;
            .comment-user{
                display: flex;
                align-items: center;
                img{
                    width: 45px;
                    padding-right: .5rem;
                }
            }
            h6{
                margin: 0;
                padding: .5rem 0;
            }
            .comment-img{
                display: flex;
                img{
                    width: 50px;
                    height: 50px;
                    padding-right: 1rem;
                }
            }
        }
    }
</style>