<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- <slot name="item-text"></slot> -->
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#f00"
    }
  },
  data() {
    return {
      //  isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);    
    },
    activeStyle(){
      return this.isActive? {color:this.activeColor} : ''
    }
    
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 39px;
  font-size: 12px;
  padding-top: 10px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
