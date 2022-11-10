<template>
  <div class="product">
      <img :src="product.image ? require(`~/assets/images/${product.image}`) : product.thumbnail" alt="">
      <div class="price-favorite">
        <h3>{{product.brand}}</h3> 
        <i class="fa-regular fa-heart"></i>
      </div>
      <p>{{product.name ? product.name : product.title}}</p>
     
      <h4>${{product.price.toFixed(2)}}</h4>
      <button @click="$store.dispatch('addToCart', product)" class="add-to-cart">Add to Cart</button>
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