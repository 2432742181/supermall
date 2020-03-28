<template>
  <div class="wrap" ref="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from "better-scroll";


export default {
  name: "Scroll",
  props:{
    probeType:{
      type: Number,
      default:0,
    },
    pullUp:{
      type: Boolean,
      dafault: false
    }
  },
  data(){ 
    return {
      scroll: null,
    }
  },
  methods: {
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
  mounted() {
    this.scroll =  new BScroll(this.$refs.wrap, {
      click:true,
      probeType:this.scroll,
      pullUpLoad: this.pullUp,
    });
    this.scroll.on('scroll',(position) => {
      this.$emit('contentScroll',position)
    })
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>

</style>
