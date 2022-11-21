<template>
  <div class="empty">
    <img src="~/assets/images/bear.jpg" alt="">
    <h1>No items on Wishlist yet</h1>
    <p>Proceed to Store and start saving.</p>
    <button @click="$router.push('/store')">Go to Store</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>