<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <no-ssr>
    <paypal-checkout
    env="sandbox"
    amount="10000"
    currency="IDR"
    locale="fr_FR"
    :client="paypal"
    :invoice-number="'201705051001'">
    </paypal-checkout>
</no-ssr>
    </div>
</template>

<script>

</script>

<style>

</style>