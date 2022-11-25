<template>
  <div>
    <empty-wishlist v-if="$store.state.wishlist.length < 1" />
    <div class="myWishlist" v-if="$store.state.wishlist.length > 0">
      <h1>My Wishlist</h1>
      <div
        class="wishlist-item"
        v-for="product in $store.state.wishlist"
        :key="product.id"
      >
        <nuxt-link :to="'/store/' + product.id">
          <img
            :src="
              product.image
                ? require(`~/assets/images/${product.image}`)
                : product.thumbnail
            "
            alt=""
          />
        </nuxt-link>
        <div class="details">
          <nuxt-link :to="'/store/' + product.id">
            <h2>{{ product.brand }}</h2>
            <p>{{ product.name ? product.name : product.title }}</p>
          </nuxt-link>
          <h3>${{ product.price.toFixed(2) }}</h3>
          <button
            @click="$store.commit('removeFromWishlist', product)"
            class="text-[#B00020]"
          >
            <i class="fa-solid fa-trash"></i> Remove
          </button>
          <br />
          <button
            @click="$store.commit('addToCart', product)"
            class="text-[#1B4B66]"
          >
            <i class="fa-solid fa-bag-shopping"></i> Move to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>