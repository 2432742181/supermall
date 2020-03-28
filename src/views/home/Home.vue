<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="nav-bar-center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll"
            v-bind:probe-type="3" 
            @contentScroll="contentScroll"
            @pullingUp="moreLoad"
            v-bind:pull-up="true">
      <home-swiper :banner="banner"></home-swiper>
      <hot-recommend v-bind:recommend="recommend"></hot-recommend>
      <future-popular v-bind:keywords="keywords"></future-popular>
      <van-sticky :offset-top="44">
          <tab-control  
          v-bind:titles="['流行','新款','精选']" 
          @tabClick="tabClick"></tab-control> 
      </van-sticky>
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
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      // console.log(position);
      this.isShow = Math.abs(position.y) > 800 
    },
    moreLoad(){
      console.log('加载更多');
      // console.log(typeof this.getHomeGoods);
      const currentType = this.currentType
      // console.log(this.word[currentType].list[this.word[currentType].index]);
      this.getHomeGoods(this.currentType,this.word[currentType].list[this.word[currentType].index])

      // 加载完图片刷新
      this.$refs.scroll.scroll.refresh()
    },
    

    // 网络请求相关
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommend = res.data.recommend.list
        console.log(this.banner);
      })
    },
    getHomeGoods(ele,type){
      const page = this.word[ele].page+1
      return getHomeGoods(type).then(res => {
        if(typeof type == 'undefined'){
          return console.log('页面到底部了');
        }
        this.goods[ele].list.push(...res.newslist)
        this.goods[ele].list.push(...res.newslist)
        this.goods[ele].page++
        this.word[ele].index++
        console.log(this.word[ele]);
        let that = this
        setTimeout(()=>{
          that.$refs.scroll.finishPullUp();
        },2000)
      })
    }
    
  },

  computed: {
    ShowImg(){
      return this.goods[this.currentType].list 
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('a',this.word.a.list[this.word.a.index])
    this.getHomeGoods('b',this.word.b.list[this.word.b.index])
    this.getHomeGoods('c',this.word.c.list[this.word.c.index])
   
  },
  moubted(){
    
  }
}

</script>

<style scoped>
.home{
  position: relative;
  height: 100vh; 
  padding-top: 40px;
  
  
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
}
</style>
