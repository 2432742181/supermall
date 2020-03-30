<template>
  <div id="detail">
   <!-- <div v-for="(item,index) of $store.state.cartList" :key="index">{{item}}</div> -->
    <detail-nav-bar class="nav-bar" @navbarClick="navbarClick"></detail-nav-bar>
    <scroll class="contenr" ref="scroll" 
            :probe-type="3"
            :pull-up="true"
            @contentScroll="contentScroll"
            @pullingUp="PullingUp">
      <detail-swiper :swiperlist="swiperlist"></detail-swiper>
      <detail-base-info v-bind:goods="goods"></detail-base-info>
      <detail-component :detailinfo="detailInfo" @imgload="imgload"></detail-component>
      <Detail-Params ref="params"></Detail-Params>
      <detail-evaluate ref="evaluate"></detail-evaluate>
      <detail-recommend ref="recommend" :detailrecommend="detailRecommend" @imageLoad="imageLoad"></detail-recommend>
      
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <detail-footBar @addCart="addCart"></detail-footBar>
    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from './children/DetailNavBar'
import DetailSwiper from './children/DetailSwiper'
import DetailBaseInfo from './children/DetailBaseInfo'
import DetailComponent from './children/DetailCommponent'
import DetailParams from './children/DetailParams'
import DetailEvaluate from './children/DetailEvaluate'
import DetailRecommend from './children/DetailRecommend'
import DetailFootBar from './children/DetailFootBar'

//导入公共组件
// import Toast from '@components/common/toast/Toast.vue'

//导入网络请求
import {getDetailSwiper , Goods, GoodsParam, getDetailRecommend} from "@network/detail"
//导入插件
import Scroll from '@components/common/scroll/Scroll'
//导入工具
import {debounce} from '@common/utils.js'

import {backTopMixin} from '@/common/mixins'
export default {
  name:'Detaill',
  mixins:[backTopMixin],
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailComponent,
    DetailParams,
    DetailEvaluate,
    DetailRecommend,
    DetailFootBar,

    // Toast,

    Scroll,
    
  },
  data(){
    return {
      id: null,
      goods:{
        a:null
      },
      swiperlist:[],
      detail:{
        swiper:[],
      },
      detailInfo:{},
      detailRecommend:{
        other:{page:0,params:['1','2','林','郑']},
        list:[]
      },
      thenTopY:[],
      currentIndex:0,
      // message:'',
      // show:false,
      
    }
  },
  methods: {
    getDetailSwiper(id){
      let that = this
      id = id.substr(0,1)
      getDetailSwiper(id).then(res => {
        this.swiperlist.push(...res.newslist)
        this.detail.swiper.push(...res.newslist)
        let itemInfo={
          desc:'新款上市',
          oldPrice:'12',
          price:'123',
          title:'【最终】2018最新款羽绒服',
          discount:'活动价'
        }
        let colums=['销量','收获11任','默认快递']
        let shopInfo={
          serve:[{name:'退货运费'},{name:'七天无理由退款'},{name:'72小时发货'}]
        }
        
        this.goods.a = new Goods(itemInfo,colums,shopInfo.serve)
        this.detailInfo = {
          list:this.detail.swiper,
          desc:'史上最牛的的衣服夫妇阿斯顿女厕'
        }
     
       
     })
    },
    getDetailRecommend(ele){
      const type = this.detailRecommend.other.params[this.detailRecommend.other.page]
      console.log(type);
      if(typeof type === 'undefined'){
        return console.log('页面到底了');
      }
      getDetailRecommend(type).then(res => {
        this.detailRecommend.other.page++
        this.detailRecommend.list.push(...res.newslist)

        setTimeout(() => {
          this.$refs.scroll.finishPullUp();
        })
      })
    },
    imgload(){
      // console.log('图片预加载了');
      this.$refs.scroll.refresh()
      // console.log( this.$refs.scroll.refresh);
    },
    imageLoad(){
      console.log('图片加载完成');
      const refresh = debounce(this.$refs.scroll.refresh,500)
      refresh()
      this.thenTopY = []
      this.thenTopY.push(0)
      this.thenTopY.push(-this.$refs.params.$el.offsetTop)
      this.thenTopY.push(-this.$refs.evaluate.$el.offsetTop)
      this.thenTopY.push(-this.$refs.recommend.$el.offsetTop)
      console.log( this.thenTopY);
      console.log(this.$refs.params.$el.offsetTop);
    },
    contentScroll(position){
      //获取 y 值
      const positionY = position.y
      //进行对比
      const thenY = this.thenTopY

      this.isShowBackTop = -position.y > 1000
     
      console.log(this.isShowBackTop);
      
    },
    PullingUp(){
      this.getDetailRecommend(this.detailRecommend)
      this.$refs.scroll.refresh()
    },
    navbarClick(index){
      console.log(this.thenTopY);
      // console.log(this.$refs.params.$el.offsetTop);
      this.$refs.scroll.scrollTo(0, this.thenTopY[index], 200)
    },
    addCart(){
      const product = {}
      product.image = this.detailRecommend.list[0].picUrl
      product.title = this.goods.a.title
      product.desc = this.goods.a.desc
      product.price = this.goods.a.newPrice
      product.id = this.id
      //将商品评价的购物车
      // this.$store.commit('getCart',product)
      this.$store.dispatch('getCart',product).then(res => {
        // console.log(res);
        // this.show = true
        // this.message = res
        // setTimeout(() => {
        //   this.show = false;
        //   this.message = ''
        // },1500)
        this.$toast.show(res, 1500)
      })
    }
  },
  created(){
    // console.log(this.$route.params.id);
    this.id = this.$route.params.id
    this.getDetailSwiper(this.id)
    this.getDetailRecommend(this.detailRecommend)


    
    
  },
  mounted(){
    imageLoad()
    
  }

}
</script>

<style scoped>
#detail{
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 19;
}
.nav-bar{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.contenr{
  height: calc(100% - 100px);
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 88px;
  left: 0;
  right: 0;

}
</style>
