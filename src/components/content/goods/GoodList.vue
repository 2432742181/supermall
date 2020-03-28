<template>
  <div class="goods">
   <good-list-item v-for="(item, index) of goods" :key="index" v-bind:goods-item="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
  name:'GoodList',
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content:space-around;
  padding: 5px;
}
</style>
