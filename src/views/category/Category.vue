<template>
  <div >
    <h2>category</h2>
    <div class="wrap">
        <ul class="content">
      
  
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
        
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
          <li>x</li>
        </ul>
    </div>
   
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data(){
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll =  new BScroll(".wrap", {
      probeType:3,
      pullUpLoad: true
    });
    this.scroll.on('scroll',(position) => {
      // console.log(position);
    })
    this.scroll.on('pullingUp',() => {
        console.log('上拉加载更多');
      setTimeout(()=>{
        this.scroll.finishPullUp()
      },2000)
    })
    
  },
  methods: {
   
  }
};
</script>

<style scoped>
.wrap {
  height: 150px;
  background-color: red;
}
</style>
