<!-- Please remove this file from your project -->
<template>
<nav>
  <div class="mobile">
    <div class="toggle">
      <nuxt-link to="/"><img src="/logo.png" alt=""></nuxt-link>
      <button @click="showMenu()"><i class="fa-solid fa-bars-staggered"></i></button>
    </div>
     
     <ul>
      <li><nuxt-link to="/store">Store</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/">Skincare</nuxt-link></li>
      <li><nuxt-link to="/">Jewellerys</nuxt-link></li>
      <li><nuxt-link to="/">Apparels</nuxt-link></li>
     </ul>
  </div>
  <div class="searchNicons">
    <form @submit.prevent="$store.dispatch('searchProduct', input)">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="search" autocomplete="off" name="search" :value="$store.state.searchInput" @keyup="(e) => $store.commit('searchInput', e)" id="search" placeholder="Search for products or brands.....">
    </form>
    <div class="icons">
      <nuxt-link to="/wishlist"><i class="fa-regular fa-heart"></i><span>{{$store.state.wishlist.length}}</span></nuxt-link>
      <nuxt-link to="/cart"><i class="fa-solid fa-bag-shopping"></i><span>{{$store.state.bag.length}}</span></nuxt-link>
      <nuxt-link to="/signin"><i class="fa-regular fa-user"></i></nuxt-link>
    </div>
 
  </div>
 
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      input:""
    }
  },
  methods: {
    showMenu() {
      const menu = this.$el.querySelector("ul")
      if(menu.style.display === "none") {
        menu.style.display = "flex"
      } else {
        menu.style.display = "none"
      }
      
    }
  }
}
</script>
