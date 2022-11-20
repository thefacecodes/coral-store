<template>
    <div class="product-details">
         <h1>Product details</h1>
         <div class="each-product">
            <div class="image-section">
                <img class="thumbnail" :src="product.image ? require(`~/assets/images/${product.image}`) : product.thumbnail" alt="">
                <div class="image-slider">
                    <img v-for="image in product.images" :key="image.index" :src="image" @click="swapImage(image)" alt="">
                </div>
            </div>
            <div class="details-section">
                <h2>{{product.brand}}</h2>
                <h3>{{product.title ? product.title : product.name}}</h3>
                <p class="ratings" v-if="product.rating"><i class="fa-solid fa-star text-[#FF8C4B]" v-for="n in Math.round(product.rating)" :key="n.index"></i><i class="fa-solid fa-star text-[#B6B6B6]" v-for="n in 5 - Math.round(product.rating)" :key="n.index"></i></p>
            
                <div class="prices">
                    <h4>${{product.price}}</h4>
                    <h5 v-if="product.discountPercentage">${{Math.round((product.price * 100) / (100 - product.discountPercentage))}}</h5>
                    <h6 v-if="product.discountPercentage">{{product.discountPercentage}}% OFF</h6>
                </div>
                <p class="description">{{product.description}}</p>
                <div class="quantity">
                    <h6>Quantity : </h6>
                    <button :disabled="quantity<=1" @click="quantity--">&#8211;</button>
                    <input type="number" name="quantity" id="quantity" v-model="quantity">
                    <button @click="quantity++">&#43;</button>
                </div>
                <div class="ctas">
                    <button @click="$store.commit('addToCart', productDispatch)" class="bg-[#1B4B66] text-white">Add to Bag</button>
                    <button @click="$store.commit('addToWishlist', product)" class="text-[#1B4B66]">Add to Wishlist</button>
                </div>
            </div>
         </div>
         
         
    </div>
 

</template>

<script>
import products from "@/assets/products.json"
import { computed } from 'vue'
export default {
    head() {
        return {
            title: this.product.title ? this.product.title : this.product.name
        }
    },
    data() {
        return {
            product: {},
            quantity: 1
        }
    },
    created() {
        if(this.$route.params.id.match("store")) {
            this.product = products.store.find(item => item.id === this.$route.params.id)
        } else {
          fetch(`https://dummyjson.com/products/${this.$route.params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.product = data
        })
        .catch(error => console.log(error))  
        }
        
    },

    computed: {
        productDispatch() {
            const current = {...this.product, "quantity" : this.quantity}
            return current
        }
    },
    methods: {
        addToCart() {
            console.log(this.productDispatch);
        },

        swapImage(image) {
            const thumbnail = this.$el.querySelector("img.thumbnail")
            thumbnail.src = image
        }
    }
}
</script>

<style>

</style>