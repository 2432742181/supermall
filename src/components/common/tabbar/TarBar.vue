<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TarBar',
  

}
</script>

<style scoped>
  .tab-bar{
    display: flex;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background: #f3f3f3;
    box-shadow: 0 -1px 1px rgba(0,0,0,.4)

  }
</style>
