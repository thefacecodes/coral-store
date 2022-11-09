<template>
  <div class="product">
      <img :src="require(`~/assets/images/${product.image}`)" alt="">
      <div class="price-favorite">
        <h3>{{product.brand}}</h3> 
        <i class="fa-regular fa-heart"></i>
      </div>
      <p>{{product.name}}</p>
     
      <h4>${{product.price.toFixed(2)}}</h4>
  </div>
</template>

<script>
export default {
props: {
    product: Object
}
}
</script>

<style>

</style>