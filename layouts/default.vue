<template>
<main>
  <Nav />
  <!-- <Modal /> -->
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

}
</script>

