<template>
  <div>
   <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
          <a :href="item.link">
            <img :src="item.image"/>
          </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from "vant";
export default {
  name: "HomeSwiper",
  props: {
    banner: Array
  },
  // components: {
  //   [Swipe.name]: Swipe,
  //   [SwipeItem.name]: SwipeItem
  // }
};
</script>

<style scoped>
.van-swipe {
  margin-top: 44px;
  width: 100vw;
  height: 200px;
}
.van-swipe .van-swipe-item {
  width: 100%;
  height: 100%;
}
.van-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
