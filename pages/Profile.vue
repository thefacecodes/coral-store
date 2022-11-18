<template>
  <div class="profile">
    <div class="top">
      <h1>Personal Information</h1>
    <!-- <h2>Hi, {{$store.state.user.email}}</h2> -->
    <button @click="$store.dispatch('SignOut')"><i class="fa-solid fa-right-from-bracket"></i> Log out</button>  
    </div>
    <div class="profile-container">
        <ul class="sidebar">
            <li>Personal Information <i class="fa-solid fa-greater-than"></i></li>
            <li>My Orders<i class="fa-solid fa-greater-than"></i></li>
            <li>My Cart<i class="fa-solid fa-greater-than"></i></li>
            <li>My Wishlist<i class="fa-solid fa-greater-than"></i></li>
        </ul>
        <div class="content">

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