<template>
  <div class="cart">
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
        <tr v-for="product in $store.state.bag" :key="product.id">
            <td>
              <div class="cart-item">
                <img :src="product.image ? require(`~/assets/images/${product.image}`) : product.thumbnail" alt="">
                <div>
                  <h4>{{product.brand}}</h4>
                <p class="text-[#626262]">{{product.title}}</p>
                </div>
                
              </div>
              </td>
            <td>${{product.price}}</td>
            <td>{{product.quantity}}</td>
            <td>${{product.price * product.quantity}}</td>
            <td>
              <button @click="$store.dispatch('decreaseQuantity', product)" class="text-[#B00020] shadow p-4">&#8211;</button>
              <button @click="product.quantity++" class="text-[#1B4B66] shadow p-4">&#43;</button>
            </td>
            <td>
              <button @click="$store.dispatch('removeFromCart', product)" class="text-[#B00020] shadow p-4"><i class="fa-solid fa-trash"></i></button>
              <button class="text-[#1B4B66] shadow p-4"><i class="fa-solid fa-heart"></i></button>
            </td>
        </tr>
    
      </tbody>
    </table>
</div>
 
    <div class="order">
      <h2>Order Summary</h2>
      <div>
        <h3>Subtotal :</h3>
        <h4>${{$store.getters.totalAmount}}</h4>
      </div>
      <div>
        <h3>Delivery fee</h3>
        <h4>$0</h4>
      </div>
      <div>
        <h3>Discount</h3>
        <h4>$0</h4>
      </div>
      <div>
        <h3>Grand total</h3>
        <h4>${{$store.getters.totalAmount}}</h4>
      </div>
      <div>
        <button class="bg-[#1B4B66] text-white">Place Order</button>
        <button @click="$router.push('/store')" class="text-[#1B4B66]">Continue Shopping</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    cartUpdate() {
      return this.$store.state.bag
    }
    
  }

}
</script>

<style>

</style>