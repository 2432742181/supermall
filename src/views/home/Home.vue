<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="nav-bar-center">购物街</div>
    </nav-bar>
    <tab-control  
      v-bind:titles="['流行','新款','精选']" 
      @tabClick="tabClick"
      ref="tabControl1" class="tab-contron" v-show="isFixed"></tab-control> 
    <scroll class="content" ref="scroll"
            v-bind:probe-type="3" 
            @contentScroll="contentScroll"
            @pullingUp="moreLoad"
            v-bind:pull-up="true">
      <home-swiper :banner="banner" @swiperLoad="swiperLoad"></home-swiper>
      <hot-recommend v-bind:recommend="recommend"></hot-recommend>
      <future-popular v-bind:keywords="keywords"></future-popular>
      
      <tab-control  
      v-bind:titles="['流行','新款','精选']" 
      @tabClick="tabClick"
      ref="tabControl2"></tab-control> 
     
      <good-list v-bind:goods="ShowImg"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
// import NavBar from '@componets/common/navbar/NavBar'
// home 地子组件
import HomeSwiper from './children/HomeSwiper.vue'
import HotRecommend from './children/HoTRecommend'
import FuturePopular from './children/FuturePopular'
//home 用到地公共组件
import NavBar from "@components/common/navbar/NavBar";
import TabControl from '@components/content/tabControl/TabControl.vue'
import GoodList from '@components/content/goods/GoodList.vue'
import Scroll from '@components/common/scroll/Scroll.vue'
import BackTop from '@components/content/backTop/BackTop.vue'

//发送 axios 请求
import { getHomeMultidata ,getHomeGoods} from "@network/home";

// 导入工具
import {debounce} from '@common/utils.js'

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HotRecommend,
    FuturePopular,
    GoodList,

    NavBar,
    TabControl,
    Scroll,
    BackTop
  },
  data(){
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        'a':{page: 0,list: []},
        'b':{page: 0, list: []},
        'c':{page: 0, list: []}
      },
      currentType:'a',
      isShow:false,
      offsetTop:0,
      isFixed:false,
      scrollY:0,
      word:{
        'a':{ index:0, list:['b','c','d','e']},
        'b':{ index:0, list:['b','c','d','e']},
        'c':{ index:0, list:['b','c','d','e']},
      }
    }
  },
 
  methods: {
    //事件监听
    tabClick(index){
      // console.log(index);
      switch(index){
        case 0:
          this.currentType = 'a'
          break;
        case 1:
          this.currentType = 'b'
          break;
        case 2:
          this.currentType = 'c'
          break;
      }
      this.$refs.tabControl2.currentIndex = index
      this.$refs.tabControl1.currentIndex = index
    },
    
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      // console.log(position);
      this.isShow = Math.abs(position.y) > 800 
      this.isFixed = Math.abs(position.y) > this.offsetTop + 44
    },
    moreLoad(){
      console.log('加载更多');
      // console.log(typeof this.getHomeGoods);
      let currentType = this.currentType
      this.getHomeGoods(this.currentType,this.word[currentType].list[this.word[currentType].index])

      // 加载完图片刷新
      this.$refs.scroll.scroll.refresh()
    },
    swiperLoad(){

      this.offsetTop = this.$refs.tabControl2.$el.offsetTop  
    },

    // 网络请求相关
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(ele,type){
      console.log(ele);
      const page = this.word[ele].page+1
      let that = this
      
      if(typeof type == 'undefined'){
         console.log('页面到底部了');
         setTimeout(()=>{
            that.$refs.scroll.finishPullUp();
          },2000)
      }else{
        getHomeGoods(type).then(res => {
          this.goods[ele].list.push(...res.newslist)
          this.goods[ele].list.push(...res.newslist)
          this.goods[ele].page++
          this.word[ele].index++

          let that = this
          setTimeout(()=>{
            that.$refs.scroll.finishPullUp();
          },2000)
        })
      }
    },
    getHomde(ele){
      getHomeGoods(ele).then(res => {
          res.newslist.forEach((item) => {
            item.id = ele+(Date.now())
          })
          this.goods[ele].list.push(...res.newslist)
          this.goods[ele].list.push(...res.newslist)
          this.goods[ele].page++
          this.word[ele].index++
      })
    }
    // debounce(func, delay){
    //   let timer = null
    //   return function(...args){
    //     if(timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this,args)
    //     },delay)
    //   }
    // }
    
  },

  computed: {
    ShowImg(){
      return this.goods[this.currentType].list 
    }
    
  },
  created(){
    this.getHomeMultidata()
    this.getHomde('a')
    this.getHomde('b')
    this.getHomde('c')
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('imageload',() => {
      // console.log('图片加载了');
      // this.$refs.scroll.refresh()
      refresh()
    })
    // this.$bus.$on('goodClick',(id) => {
    //   this.$router.push('/detail/' +id)
    // })
    this.swiperLoad()
  },
  activated(){
    console.log(this.scrollY);
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
    
    this.$refs.scroll.refresh()
  },
  deactivated(){
     this.scrollY = this.$refs.scroll.scroll.y
 
  }
}

</script>

<style scoped>
.home{
  position: relative;
  height: 100vh;  
}
.home-nav {
  background-color: var(--color-tint, #ff8190);
  color: #fff;
}
.content{
  position: absolute;
  top: 40px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-contron{
  position: relative;
  z-index: 9;
}
</style>
