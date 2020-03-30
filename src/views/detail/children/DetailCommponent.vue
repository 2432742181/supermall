<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="sesc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
   <div class="info-key">{{detailInfo.list[0].description}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.list" :key="index" :src="item.picUrl" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComponent',
  // props: {
  //   detailInfo:{
  //     type:Object,
  //     default(){
  //       return {}
  //     }
  //   }
  // },
  props:['detailinfo'],
  data(){
    return{
      imgLenth:0,
      count:0
    }
  },
  methods: {
    imgLoad(){
      // console.log('图片预加载');
      this.count++
      if(this.count == this.imgLenth){
        this.$emit('imgload')
      }

    }
  },
  watch:{
    detailInfo(){
      this.imgLenth = this.detailInfo.list.length
    }
  },
  created(){

  }

}
</script>

<style scoped>

.info-list img{
  width: 100%;
}
</style>
