<template>
  <div class="profile">
    <h2>Personal profile</h2>
    <p>Welcome, {{$store.state.user.displayName ? $store.state.user.displayName : $store.state.user.email}}</p>
    <form>
      <img :src="$store.state.user.photoURL ? $store.state.user.photoURL : 'https://onlineforexmaster.com/wp-content/uploads/2016/04/User-Avatar-1-300x278.png'" alt="">
      <label for="fullname">Full Name</label>
      <div class="forminput">
        <input type="text" placeholder="Enter Name" :value="$store.state.user.displayName" disabled name="fullname" id="fullname"> 
       </div>
       <label for="email">Email</label>
       <div class="forminput">
        <input type="text" placeholder="Enter Email" :value="$store.state.user.email" disabled name="email" id="email"> 
       </div>
       <label for="phone">Phone</label>
       <div class="forminput">
        <input type="text" placeholder="Enter Phone" :value="$store.state.user.phoneNumber" disabled name="phone" id="phone"> 
       </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>