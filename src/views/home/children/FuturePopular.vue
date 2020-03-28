<template>
  <div class="future-popular">
    <a href="#">
      <img src="~@assets/img/home/recommend_bg.jpg" alt="每日流行">
    </a>
  </div>
</template>

<script>
export default {
  name: 'FutruePopular',
  props: {
    keywords:Array,
    default(){
      return []
    }
  }

}
</script>

<style scoped>
.future-popular img{
  width: 100%;
}
</style>
