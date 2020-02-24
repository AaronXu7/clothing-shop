<template>
  <div class="category-tab">
      <div class="category-list">
          <category-list v-for="(item,index) in categories" :key="item.index" 
                         :list="item"
                         @click.native="currentClick(index)"
                         :class="{isActive : currentIndex === index}"/>
      </div>
      <div class="category-items">
          <category-item :sub="categorySelect"/>
      </div>
  </div>
</template>

<script>
import CategoryList from './CategoryList'
import CategoryItem from './CategoryItem'

import {
    getCategory,
    getSubCategory
} from 'network/category'

export default {
    name:'CategoryTab',
    components:{
        CategoryList,
        CategoryItem
    },
    data(){
      return {
        categories:[],
        categoryData: {},
        categorySelect:[],
        currentIndex:0
      }
    },
    created(){
      this.getCategory()
    },
    methods:{
        currentClick(index){
            this.currentIndex = index
            this.getSubCategories(index)
        },
        getCategory(){
            getCategory().then(res => {
                this.categories = res.data.data.category.list
                // 2.初始化每个类别的子数据
                for (let i = 0; i < this.categories.length; i++) {
                    this.categoryData[i] = {
                    subcategories: {},
                    categoryDetail: {
                        'pop': [],
                        'new': [],
                        'sell': []
                    }
                    }
                }
                // 3.请求第一个分类的数据
                this.getSubCategories(0)
            })
        },
        getSubCategories(index){
            this.currentIndex = index;
            const mailKey = this.categories[index].maitKey;
            getSubCategory(mailKey).then(res => {
                this.categoryData[index].subcategories = res.data
                this.categoryData = {...this.categoryData}
                this.categorySelect = this.categoryData[this.currentIndex].subcategories.data.list
            })
        }
    }
}
</script>

<style lang="less">
    .category-tab{
        display: flex;
        .category-list{
            flex: 0 0 30%;
            border-right:2px solid @border-color;
        }
        .category-items{
            flex: 0 0 70%;
        }
    }
    .isActive{
        background-color: @main-color;
        color:#fff;
    }
</style>