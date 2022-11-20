<template>
  <div class="modal">
    <h1>{{$store.state.modal.message}}</h1>
    <p>{{$store.state.modal.description}}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => this.$store.commit('closeModal'), 3000)
    
  }

}
</script>

<style>

</style>