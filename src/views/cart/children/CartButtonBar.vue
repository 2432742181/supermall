<template>
  <div class="botton-bar">
    <div class="check-content">
      <Check-box class="check-Button" :class="{ischecked:isSelectAll}" @click.native="selectAll"></Check-box>
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate" @click="calculate">
      去计算：{{checkLength}}
    </div>
  </div>
</template>

<script>
import CheckBox from '@components/content/checkbox/CheckBox'
export default {
  name: 'CartButtonBar',
  components: {
    CheckBox
  },
  methods:{
    selectAll(){
      console.log(this.isSelectAll);
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
      
    },
    calculate(){
      if (!this.isSelectAll){
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  },
  computed:{
    totalPrice(){
      return '￥'+ this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue+ item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item => {
        return  item.checked
      }).length
    },
    isSelectAll(){
      if(this.$store.state.cartList.length <=0) return false
      // return !(this.$store.state.cartList.filter(item => item.checked===false).length)
      return !(this.$store.state.cartList.find(item => item.checked=== false))
    }
  }

}
</script>

<style scoped>
.botton-bar{
  position: relative;
  display: flex;
  bottom: 40px;
  height: 40px;
  padding-left: 10px;
  line-height: 40px;
  background-color: #eee;

}
.check-content{
  display: flex;
  height: 100%;
  align-items: center;
}

.check-Button{
  position: relative;
  z-index: 10;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.price{
  margin-left: 10px;
}
.calculate{

  width: 100px;
  margin-left: auto;
  background-color: #ff8000;
  text-align: center;
  color: #fff;
}
.ischecked{
  background-color: #f00;
}

</style>
