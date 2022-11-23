<template>
  <div class="profile">
    <div class="top">
      <h1>Personal Information</h1>
    <!-- <h2>Hi, {{$store.state.user.email}}</h2> -->
    <button @click="$store.commit('SignOut')"><i class="fa-solid fa-right-from-bracket"></i> Log out</button>  
    </div>
    <div class="profile-container">
        <ul class="sidebar">
            <li @click="view = 'personal'">Personal Information <i class="fa-solid fa-greater-than"></i></li>
            <li @click="view = 'orders'">My Orders<i class="fa-solid fa-greater-than"></i></li>
            <li @click="view = 'cart'">My Cart<i class="fa-solid fa-greater-than"></i></li>
            <li @click="view = 'wishlist'">My Wishlist<i class="fa-solid fa-greater-than"></i></li>
        </ul>
        <div class="content">
            <personal-profile v-if="view === 'personal'" />
            <orders v-else-if="view === 'orders'" />
            <my-cart v-else-if="view === 'cart'"/>
            <my-wishlist v-else-if="view === 'wishlist'"/>
        </div>
    </div>
  </div>
</template>

<script>
import Orders from '~/components/Orders.vue'
import PersonalProfile from '~/components/PersonalProfile.vue'
export default {
  components: { PersonalProfile, Orders },
  data() {
    return {
        view: "personal"
    }
  },
  mounted() {
    if(!this.$store.state.user) {
      this.$router.push('/signin')
    }
    console.log(this.$fire.storage);
    console.log(this.$fireModule.storage);
  }

}
</script>

<style>

</style>