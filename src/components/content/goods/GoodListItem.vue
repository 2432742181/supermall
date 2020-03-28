<template>
  <div class="goods-list-item">
    <img v-bind:src="goodsItem.picUrl" alt="">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="time">{{goodsItem.ctime}}</span>
      <span class="description">{{goodsItem.description}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }

}
</script>

<style scoped>
  .goods-list-item{
    width: 48%;
    border-radius: 10px;
    overflow: hidden;
    margin-right: auto;
  
    
  }
  .goods-list-item p{
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .goods-list-item span{
    font-size: 12px;
  }
  .goods-list-item img{
    width: 100%;
  }
</style>
