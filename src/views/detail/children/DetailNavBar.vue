<template>
  <div>
     <nav-bar>
      <div slot="nav-bar-left" class="back" @click="backClick">
        <img src="~@assets/img/common/back.svg" alt="">
      </div>
      <div slot="nav-bar-center" class="center">
        <div v-for="(item,index) of titles" :key="index" 
            v-bind:class="{active:currenIndex == index}"
            @click="itemClick(index)">{{item}} </div>
      </div>
    </nav-bar>
 </div>
</template>

<script>
import NavBar from "@components/common/navbar/NavBar";

export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data(){
    return{
      titles: ['商品','参数','评论','推荐'],
      currenIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currenIndex = index
      this.$emit('navbarClick',index)
    },
    backClick(){
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
.center>div{
  display: flex;
  /* justify-content: space-around; */
}
.center>div>div{
  flex: 1;
}
.active{
  color:#ff5000
}
.back{
  margin-top: 6px;
  margin-left: 10px;
}
</style>
