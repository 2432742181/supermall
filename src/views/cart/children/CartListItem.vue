<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <Check-Box :class="{isCheck:product.checked}" @click.native="checkClick"></Check-Box>
      
    </div>
   <!-- <van-checkbox v-model="product.isCheck" class="checkbox"></van-checkbox> -->
    <van-card class="card"
    :num="product.count"
    :price="product.price"
    :desc="product.desc"
    :title="product.title"
    :thumb="product.image"
    >
    </van-card>
  </div>
</template>

<script>
import CheckBox from '@components/content/checkbox/CheckBox'
export default {
  name: "CartListItem",
  data(){
    return {
      
    }
  },
  components: {
    CheckBox
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick(){
      this.product.checked = !this.product.checked
    }
  }
};
</script>

<style scoped>
.cart-list-item{
  display: flex;
  justify-content: center;
  align-items: center;  
}
.checkbox{
  width: 20px;
}
.card{
  flex: 1;
}
.item-selector{
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;   

  
}

.isCheck{
  background-color: #f00;
  
}
</style>
