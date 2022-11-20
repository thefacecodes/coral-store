<template>
<main>
  <Nav />
  <Modal v-if="$store.state.modal"/>
  <Nuxt />
  <Footer />
</main>
 
</template>

<script>
export default {
  created() {
    this.$fire.auth.onAuthStateChanged(user => {
     this.$store.commit('checkStatus', user)
      console.log(user);
  })
  },
  computed() {
      return this.$store.state.modal  
  }

}
</script>

