<template>
  <div>
    <div class="cart-summary">
        <h2>Order Summary</h2>
        <div class="cart-list" v-for="product in $store.state.bag" :key="product.id">
            <img :src="product.image ? require(`~/assets/images/${product.image}`) : product.thumbnail" alt="">
              <div>
                <h4>{{product.brand}}</h4>
                <p class="text-[#626262]">{{product.title ? product.title : product.name}}</p>
                <p>Quantity: {{product.quantity}}</p>
              </div>
        </div>
      </div>
      <div class="order">
      <h2>Order Details</h2>
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
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>