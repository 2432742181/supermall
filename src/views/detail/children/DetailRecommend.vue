<template>
  <div class="recommend">
    <div class="title" >其他商品推荐</div>
    <div class="recommend-item" v-for="(item,index) of detailrecommend.list" :key="index">
      <img :src="item.picUrl" alt="" @load="imgLoad">
      <p>{{item.description}}</p>
      <p>{{item.ctime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecommend',
  props: {
    detailrecommend:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$emit('imageLoad')
    }
  },
  created(){
    console.log(detailRecommend);
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recommend-item{
  width: 45%;
}
.title{
  width: 100%;
}
.recommend-item img{
  width: 100%;
}
</style>
