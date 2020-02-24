<template>
    <div class="item-radio">
        <i :class="isChecked ? 'fas fa-check-circle fa-lg':'far fa-circle fa-lg'"></i>
    </div>
</template>

<script>
export default {
    name:'CartRadio',
    props:{
        isChecked:{
            type:Boolean,
            default:true
        }
    }
}
</script>

<style lang="less">
    .item-radio{
        padding:0 1rem;
        color:@main-color;
    }
</style>