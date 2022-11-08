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
        <p>View all &#062;</p>
      </div>
      <div v-for="item in store" :key="item.id">
        <!-- <h3>{{item.id}}</h3> -->
         <Product :product="item" />
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
  }
};
</script>
