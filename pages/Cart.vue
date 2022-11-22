<template>
  <section>
    <empty-cart v-if="$store.state.bag.length < 1"/>
  <div class="cart" v-if="$store.state.bag.length > 0">
    <h1>My Cart</h1>
   <div class="container">
<div class="table-container">
     <table>
      <tbody>
    
        <tr class="font-bold">
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
        </tr>
        <tr v-for="product in cartUpdate" :key="product.id">
            <td>
              <nuxt-link :to="'/store/' + product.id">
              <div class="cart-item">
                <img :src="product.image ? require(`~/assets/images/${product.image}`) : product.thumbnail" alt="">
                <div>
                  <h4>{{product.brand}}</h4>
                <p class="text-[#626262]">{{product.title ? product.title : product.name}}</p>
                </div>
                
              </div>
              </nuxt-link>
              </td>
            <td>${{product.price}}</td>
            <td>{{product.quantity}}</td>
            <td>${{(product.price * product.quantity).toFixed(2)}}</td>
            <td>
              <button :disabled="product.quantity<=1" @click="$store.commit('decreaseQuantity', product)" class="text-[#B00020] shadow p-4">&#8211;</button>
              <button @click="$store.commit('increaseQuantity', product)" class="text-[#1B4B66] shadow p-4">&#43;</button>
            </td>
            <td>
              <button @click="$store.commit('removeFromCart', product)" class="text-[#B00020] shadow p-4"><i class="fa-solid fa-trash"></i></button>
              <button @click="$store.commit('addToWishlist', product)" class="text-[#1B4B66] shadow p-4"><i class="fa-solid fa-heart"></i></button>
            </td>
        </tr>
    
      </tbody>
    </table>
</div>
 
    <div class="order">
      <h2>Order Summary</h2>
      <div>
        <h3>Subtotal :</h3>
        <h4>${{$store.state.totalAmount}}</h4>
      </div>
      <div>
        <h3>Delivery fee</h3>
        <h4>$0</h4>
      </div>
      <div>
        <h3>Discount</h3>
        <h4>${{$store.state.discount.toFixed(2)}}</h4>
      </div>
      <div>
        <h3>Grand total</h3>
        <h4>${{($store.state.totalAmount - $store.state.discount).toFixed(2)}}</h4>
      </div>
      <div>
        <button @click="$router.push('/checkout')" class="bg-[#1B4B66] text-white">Place Order</button>
        <button @click="$router.push('/store')" class="text-[#1B4B66]">Continue Shopping</button>
      </div>
    </div>
  </div>
  <form @submit.prevent="applyCoupon()">
    <h5>Apply Coupon</h5>
    <div class="forminput">
       <input type="text" autocomplete="off" placeholder="Apply Coupon Code" v-model="coupon" name="coupon" id="coupon">
    <button type="submit">CHECK</button>
    </div>
   
  </form>
</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      coupon: ""
    }
  },
  computed: {
    cartUpdate() {
      return this.$store.state.bag
    }
  },
  methods: {
    applyCoupon() {
      this.$store.commit('applyCoupon', this.coupon)
      this.coupon = ""
    }
  },
 

}
</script>

<style>

</style>