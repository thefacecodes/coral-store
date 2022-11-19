<template>
  <div class="store">
    <img src="~/assets/images/black-friday.png" class="w-full" alt="">
    <h1>Store</h1>
    <h2 class="text-center my-6" v-if="$store.state.storeProducts.length < 1">Nothing found</h2>
    <div class="store-container">
       <Product v-for="product in $store.state.storeProducts" :key="product.id" :product="product"/>
    </div>
    <div class="pagination"  v-if="$store.state.storeProducts.length > 19">
        <button @click="$store.dispatch('prevPageProducts')" v-show="$store.state.skip >= 20">Prev</button>
        <button>Current</button>
        <button @click="$store.dispatch('nextPageProducts')">Next</button>
    </div>
     </div>
</template>

<script>

export default {
  data() {
    return {
    //   $store.state.storeProducts: products.store,
      skip: 0,
      limit: 20
    }
  },
  created(){
    this.$store.dispatch('productsList')
  },
  mounted() {
    console.log(this.$store.state.storeProducts);
    console.log(this.$router);
  }
};
</script>

<style>

</style>