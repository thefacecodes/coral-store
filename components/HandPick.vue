<template>
  <div class="handpick">
    <h2>Handpick Collection</h2>
    <div class="category">
        <div v-for="item in category" :key="item.index">
        <img :src="require(`~/assets/images/${item.image}`)" alt="">
        <h4>{{item.name}}</h4>
        </div>
    </div>
  </div>
</template>

<script>
import products from "../assets/products.json"
export default {
    data() {
        return {
            category: products.handpick
        }
    }

}
</script>

<style>

</style>