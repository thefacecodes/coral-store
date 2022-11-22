<template>
<main>
  <Nav />
  <Modal v-if="$store.state.modal"/>
  <Nuxt />
  <Footer />
</main>
 
</template>

<script>
// import Vue from 'vue'
// import PayPal from 'vue-paypal-checkout'
// Vue.component('paypal-checkout', PayPal)
export default {
  created() {
    this.$fire.auth.onAuthStateChanged(user => {
     this.$store.commit('checkStatus', user)
      console.log(user);
  })
  },
  computed: {
    
  }

}
</script>

