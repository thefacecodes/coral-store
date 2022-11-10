<template>
  <div>
    <div class="banner">
      <div class="hero-text">
        <h1>Carry your Funk</h1>
        <p>Trendy handbags collection for your party animal</p>
        <button>&#8594; See more</button>
      </div>
    </div>
    <div class="arrival">
      <div class="top">
        <h2>New Arrival</h2>
        <nuxt-link to="/store"><p>View all &#062;</p></nuxt-link>
      </div>
      <div class="wrapper">
           <div class="product-container">
         <Product v-for="item in store" :key="item.id" :product="item" />
      </div>
      </div>
   
    </div> 
    <HandPick />
    <div class="brands">
      <h2>Shop by Brands</h2>
      <div class="wrapper">
           <div class="brand-container">
        <img src="~/assets/images/block.png" alt="">
        <img src="~/assets/images/block-1.png" alt="">
        <img src="~/assets/images/block-2.png" alt="">
        <img src="~/assets/images/block-3.png" alt="">
        <img src="~/assets/images/block-4.png" alt="">
        <img src="~/assets/images/block-5.png" alt="">
      </div>
      </div>
   
       <img class="banner-2" src="~/assets/images/hero.png" alt="">
       <div class="cta">
        <img src="~/assets/images/skincare.png" alt="">
        <img src="~/assets/images/facepacks.png" alt="">
       </div>
    </div>
   
  </div>
</template>

<script>
import products from "../assets/products.json"
export default {
  name: "IndexPage",
  data() {
    return {
      store: products.store
    }
  },
  mounted() {
    console.log(this.store);
  },
  head() {
    return {
      title: "Cora'l Store"
    }
  }
};
</script>
