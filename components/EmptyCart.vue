<template>
  <div class="empty">
    <img src="~/assets/empty-cart.jpg" alt="">
    <h1>Your Cart is empty.</h1>
    <p>Proceed to Store and start shopping.</p>
    <button @click="$router.push('/store')">Go to Store</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>