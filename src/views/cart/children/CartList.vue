<template>
  <div class="cart-list">
    <scroll class="centent" ref="scroll">
      <cart-list-item 
      v-for="(item,index) of cartList" 
      :key="index" 
      :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@components/common/scroll/Scroll'
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'
export default {
  name: 'CartList',
  components: { 
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated(){
    
    this.$refs.scroll.refresh()
  }

}
</script>

<style scoped>
.cart-list{
  height: calc(100% - 94px);
  
}
.centent{
  width: 100%;
  font-size: 50px;
  height: 100%;

  
  
}
</style>
