<template>
  <van-swipe :autoplay="2000" class="swiper-content">
    <van-swipe-item v-for="(item,index) of swiperlist" :key="index">
      <img v-bind:src="item.picUrl" alt="">
    </van-swipe-item>

  </van-swipe>
</template>

<script>

export default {
  name:'DetailSwiper',
  props: {
    swiperlist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  created(){
  }

}
</script>

<style scoped>
.swiper-content{
  height: 300px;
}
.swiper-content img{
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
}
</style>
