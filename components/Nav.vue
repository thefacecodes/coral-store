<!-- Please remove this file from your project -->
<template>
<nav>
  <div>
     <img src="/logo.png" alt="">
     <nuxt-link to="/">Handbags</nuxt-link>
<nuxt-link to="/about">Watches</nuxt-link>
<nuxt-link to="/">Skincare</nuxt-link>
<nuxt-link to="/">Jewellerys</nuxt-link>
<nuxt-link to="/">Apparels</nuxt-link>
  </div>
  <div>
    <form>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="search" name="search" id="search" placeholder="Search for products or brands.....">
    </form>
    <i class="fa-regular fa-heart"></i>
    <i @click="$router.push('/cart')" class="fa-solid fa-bag-shopping"></i>
    <i class="fa-regular fa-user"></i>

  </div>
 
</nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
