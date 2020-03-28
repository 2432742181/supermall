<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="nav-bar-left"></slot>
    </div>
     <div class="center">
      <slot name="nav-bar-center"></slot>
    </div>
     <div class="right">
      <slot name="nav-bar-right"></slot>
    </div>
     
  </div>
</template>

<script>
export default {
  name: 'NavBar'

}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100,100,100,.2);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .left,
  .right{
    width: 60px;
    
  }

  .center{
    flex: 1;
    text-align: center;
  }
</style>
