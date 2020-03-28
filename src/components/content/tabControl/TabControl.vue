<template>
  <div class="tab-control">
    <div v-bind:class="{active:index === currentIndex}" v-on:click="itemClick(index)" class="tab-control-item" v-for="(item,index) in titles" v-bind:key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles:Array,
    default(){
      return []
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  },
  computed: {
   
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  position:sticky;
  top: 0;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 0 5px 3px 5px;
}
.active {
  color: var(--color-height-text,#ff5000)
}
.active span{
  border-bottom: 2px solid #ff5000;
}
</style>
