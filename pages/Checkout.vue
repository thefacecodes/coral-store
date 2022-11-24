<template>
  <div class="checkout" v-if="$store.state.bag.length > 0">
    <h1>Checkout</h1>
    <div class="checkout-details">
      <section class="input">
      <div class="addressForm" @click="showForm = !showForm">
      <h2>Add Address</h2>
      <i v-if="!showForm" class="fa-solid fa-angle-down"></i>
      <i v-else class="fa-solid fa-angle-up"></i>
    </div>
      
    <form v-show="showForm" @submit.prevent="saveDetails()">
      <label for="fullname">Full Name</label>
      <div class="forminput">
        <input type="text" placeholder="Enter Name" v-model="details.fullname" name="fullname" id="fullname"> 
       </div>
       <label for="phone">Phone Number</label>
      <div class="forminput">
        <input type="text" placeholder="Enter Number" v-model="details.phoneNumber" name="phone" id="fullname"> 
       </div>
       <label for="street">Street Address</label>
      <div class="forminput">
        <input type="text" placeholder="Enter Address" v-model="details.street" name="street" id="fullname"> 
       </div>
       <label for="state">State</label>
      <div class="forminput">
        <input type="text" placeholder="Enter State" v-model="details.state" name="state" id="fullname"> 
       </div>
       <label for="city">City</label>
      <div class="forminput">
        <input type="text" placeholder="Enter City" v-model="details.city" name="city" id="fullname"> 
       </div>
       <label for="pin">Pin Code</label>
      <div class="forminput">
        <input type="text" placeholder="Enter PIN" v-model="details.pin" name="pin" id="fullname"> 
       </div>
       <div class="buttons">
        <button type="submit">Next</button>
       </div>
       
    </form>

    <div class="addressForm" @click="showPaymentOptions = !showPaymentOptions">
      <h2>Select payment Method</h2>
      <i v-if="!showPaymentOptions" class="fa-solid fa-angle-down"></i>
      <i v-else class="fa-solid fa-angle-up"></i>
    </div>
    <form v-show="showPaymentOptions" @submit.prevent="gotoPay()">
      <input type="radio" name="pay" id="paypal"> PayPal
      <input type="radio" name="pay" id="card"> Card
      <input type="radio" name="pay" id="pod"> Pay on delivery
      <br />
      <div class="buttons">
        <button @click="$router.push('/cart')">Back to Cart</button>
         <button type="submit">Next</button>
      </div>
     
    </form>
 
    </section>
    <section class="cart-details">
      <cart-summary />
    </section>
    </div>
    </div>
    <div v-else>
      {{$router.push("/store")}}
    </div>
</template>

<script>
import CartSummary from '~/components/CartSummary.vue'
export default {
  components: { CartSummary },
  data() {
    return {
      showForm: false,
      showPaymentOptions: false,
      details: {
        fullname: "",
        phoneNumber: "",
        street: "",
        state: "",
        city: "",
        pin: ""
      }
    }
  },
  methods: {
    saveDetails() {
      this.$store.commit('saveDetails', this.details)
      if(this.details.fullname && this.details.street && this.details.phoneNumber && this.details.pin && this.details.state && this.details.city) {
        this.showForm = false
        this.showPaymentOptions = true
      }
      
    },
    gotoPay() {
      this.$router.push("/payment")
    }
  }
}
</script>

<style>

</style>