<template>
  <div class="signin">
    <h1>Sign in/Sign up</h1>
    <p>Log in or create an account</p>
    <form>
      <label for="email">Email</label>
      <div class="forminput">
        <input type="email" v-model="user.email" name="email" id="email">
      </div>
      <label for="password">Password</label>
      <div class="forminput">
        <input type="password" v-model="user.password" name="password" id="password"> 
        <i @click="(e) => showPassword(e)" class="fa-regular fa-eye"></i>
      </div>
      <button type="submit" @click.prevent="(e) => $store.dispatch('LoginAccount' , user)">Login</button>
      <button type="submit" @click.prevent="(e) => $store.dispatch('createAccount', user)">Register</button>
      <h3 class="text-center my-4 font-bold">OR</h3>
      <button @click.prevent="$store.commit('googleSignIn')"><i class="fa-brands fa-google"></i> &nbsp; Sign in with Google</button>
    </form>
    <h3 v-if="$store.state.user">{{$store.state.user.email}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {
        email: "",
        password: "",
      }
      
    }
  },
  mounted() {
    if(this.$store.state.user) {
      this.$router.push('/profile')
    }
  },
  
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