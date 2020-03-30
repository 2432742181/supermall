<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="nav-bar-center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- dibu -->
    <cart-button-bar></cart-button-bar>
  </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar'
import CartList from './children/CartList.vue'
import CartButtonBar from './children/CartButtonBar.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartButtonBar
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
    // cartLength(){
    //   // return this.$store.state.cartList.length
    //   return this.$store.getters.cartLength
    // }
  
  }

}
</script>

<style scoped>
.cart{
  height: 100vh;
  overflow: hidden;
}
.nav-bar{
  background-color: #ff8190;
  color: #fff;
  font-size: 16px;
}
</style>
