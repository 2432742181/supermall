<template>
  <div class="goods-list-item" v-on:click="goodClick">
    <img v-bind:src="goodsItem.picUrl" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="time">{{goodsItem.ctime}}</span>
      <span class="description">{{goodsItem.description}}</span>
    </div>
  </div>
</template>

<script>
// import router from '@/router'
export default {
  name: "GoodListItem",
  // props: {
  //   goodsItem: {
  //     type: Object,
  //     default(){
  //       return {}
  //     }
  //   }
  // },
  props:['goodsItem'],
  data(){
    return {
      id:this.goodsItem.id+(Date.now())
    }
  },
  methods: {
    imageLoad(){
      // console.log('图片加载完成');
      this.$bus.$emit('imageload')
    },
    goodClick(){
      this.getPath(this.id)

    },
    getPath(path){
      // router.push('/detail/'+path)
     
      this.$router.push('/detail/' + this.id)


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
