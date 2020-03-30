<template>
  <div class="check-button">
    <img src="~@assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton"

}
</script>

<style scoped>
.check-button{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.check-button img{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
</style>
