<template>
    <div class="toast" v-show="isShow">
        {{msg}}
    </div>
</template>

<script>
export default {
    name:'Toast',
    data(){
        return {
            isShow:false,
            msg:''
        }
    },
    methods:{
        show(msg,duration){
            duration = duration || 2000
            this.isShow = true
            this.msg = msg
            setTimeout(()=>{
                this.isShow = false
                this.msg = ''
            },duration)
            
        }
    }
}
</script>

<style>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
        background-color: rgba(0,0,0,.8);
        color:#fff;
        font-size: 16px;
        padding: .5rem 1rem;
    }
</style>