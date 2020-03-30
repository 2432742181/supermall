<template>
  <div class="info">
      <div class="info-title">{{goods.a.title}}</div> 
      <div class="info-proce">
        <span class="n-price">{{goods.a.newPrice | filterPrice}}</span>
        <span class="o-price">{{goods.a.oldPrice | filterPrice}}</span>
        <span v-if="goods.a.discount" class="discount">{{goods.a.discount}}</span>
      </div>
      <div class="info-other">
        <span>{{goods.a.columns[0]}}</span>
        <span>{{goods.a.columns[1]}}</span>
        <span>{{goods.a.services[goods.a.services.length-1].name}}</span>
      </div>
      <div class="info-service">
        <span class="info-service-item" v-for="index in goods.a.services.length-1" :key="index">
          <span>{{goods.a.services[index-1].name}}</span>
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  // props: {
  //     goods:Object
  // },
  props:['goods'],
  filters:{
    filterPrice(price){
      return '￥'+ Number(price).toFixed(2)
    }
  },
  created(){
  
  }

}
</script>

<style scoped>
.info{
  padding: 10px;
}
.info-title{
  font-size: 20px;
  margin: 10px 0;
}
.n-price{
  color: #f55000;
  font-size: 20px;
  margin-right: 10px;
}
.o-price{
  text-decoration: line-through;
}
.info-other{
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.info-service{
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
}

</style>
