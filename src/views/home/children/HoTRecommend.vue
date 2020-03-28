<template>
  <div class="hot-recommend">
    <div class="hot-recommend-item" v-for="(item,index) of recommend" v-bind:key="index">
      <a v-bind:href="item.acm">
        <img v-bind:src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotRecommend',
  props: {
    recommend:Array,
    default(){
      return []
    }
  }
}
</script>

<style scoped>
  .hot-recommend{
    display: flex;
    padding:10px 0 20px ;
    text-align: center;
    border-bottom: 10px solid #eee;
  }
  .hot-recommend .hot-recommend-item{
    flex: 1
    
  }
  .hot-recommend .hot-recommend-item img{
    width: 70px;
    height: 70px;
    padding-bottom: 10px;
  }
</style>
