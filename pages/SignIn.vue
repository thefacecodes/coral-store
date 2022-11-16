<template>
  <div class="signin">
    <h1>Sign in/Sign up</h1>
    <p>Log in or create an account</p>
    <form @submit.prevent>
      <label for="email">Email</label>
      <div class="forminput">
        <input type="email" name="email" id="email">
      </div>
      <label for="password">Password</label>
      <div class="forminput">
        <input type="password" name="password" placeholder="Enter password" id="password"> 
        <i @click="(e) => showPassword(e)" class="fa-regular fa-eye"></i>
      </div>
      <button type="submit">Login/Register</button>
      <button><i class="fa-brands fa-google"></i> &nbsp; Sign in with Google</button>
    </form>
    
  </div>
</template>

<script>
export default {
  methods: {
    showPassword(e) {
      const password = this.$el.querySelector("#password")

      if(password.type === "password") {
        password.type = "text"
        e.target.classList.replace("fa-eye", "fa-eye-slash")
      } else {
        password.type = "password"
        e.target.classList.replace("fa-eye-slash", "fa-eye")
      }
    }
  }

}
</script>

<style>

</style>