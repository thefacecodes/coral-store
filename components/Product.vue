<template>
  <div class="product">
    <nuxt-link :to="'/store/' + product.id">
      <img :src="product.image ? require(`~/assets/images/${product.image}`) : product.thumbnail" alt="">
      </nuxt-link>
      <div class="price-favorite">
        <h3>{{product.brand}}</h3> 
        <i @click="$store.commit('addToWishlist', product)" class="fa-regular fa-heart"></i>
      </div>
      <nuxt-link :to="'/store/' + product.id">
      <p>{{product.name ? product.name : product.title}}</p>
     </nuxt-link>
      <h4>${{product.price.toFixed(2)}}</h4>
      <button v-if="!this.cartStatus" @click="$store.commit('addToCart', productDispatch)" class="add-to-cart">Add to Cart</button>
      <div class="manipulate" v-if="this.cartStatus">
        <button @click="reduceAndremove(product)">&#8211;</button>
        <button class="text-[#1B4B66]">{{cartStatus.quantity}}</button>
        <button  @click="$store.commit('addToCart', product)">&#43;</button>  
      </div>
  </div>
</template>

<script>
export default {
props: {
    product: Object
},
data() {
  return {
    quantity: 1
  }
},
methods: {
  reduceAndremove(product) {
    if(this.cartStatus.quantity > 1) {
      this.$store.commit('decreaseQuantity', product)
    } else {
      this.$store.commit('removeFromCart', product)
    }
  }
},
computed: {
        productDispatch() {
            const current = {...this.product, "quantity" : this.quantity}
            return current
        },
        cartStatus() {
            const already = this.$store.state.bag.find(item => item.id === this.product.id)
            return already
    }
      }
}
</script>

<style>

</style>