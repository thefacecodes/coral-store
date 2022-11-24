<template>
  <div class="payment">
    <h1>Payment</h1>
    <div class="payment-details">
        <section class="pay">
            <div class="addressForm" @click="showInfo = !showInfo">
            <h2>Contact Information</h2>
            <i v-if="!showInfo" class="fa-solid fa-angle-down"></i>
            <i v-else class="fa-solid fa-angle-up"></i>
            </div>
            <div v-show="showInfo">
            <h3>Name : {{$store.state.details.fullname}}</h3>
            <h3>Email : {{$store.state.user?.email}}</h3>
            <h3>Phone : {{$store.state.details.phoneNumber}}</h3>
            <h3>Address : {{$store.state.details.street}}</h3>
            <h3>City, State : {{$store.state.details.city + ", " + $store.state.details.state}}</h3>
            </div>
            <div class="addressForm" @click="showPay = !showPay">
            <h2>Payment</h2>
            <i v-if="!showPay" class="fa-solid fa-angle-down"></i>
            <i v-else class="fa-solid fa-angle-up"></i>
            </div>
        </section>
        <section class="cart-details">
            <cart-summary />
        </section>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showInfo: false,
            showPay: false
        }
    }

}
</script>

<style>

</style>