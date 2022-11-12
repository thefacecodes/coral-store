<template>
    <div class="product-details">
         <h1>Product details</h1>
         <div class="each-product">
            <div class="image-section">
                <img :src="product.image ? require(`~/assets/images/${product.image}`) : product.thumbnail" alt="">
            </div>
            <div class="details-section">
                <h2>{{product.brand}}</h2>
                <h3>{{product.title ? product.title : product.name}}</h3>
                <p class="ratings" v-if="product.rating"><i class="fa-solid fa-star text-[#FF8C4B]" v-for="n in Math.round(product.rating)" :key="n.index"></i><i class="fa-solid fa-star text-[#B6B6B6]" v-for="n in 5 - Math.round(product.rating)" :key="n.index"></i></p>
                <hr />
                <div class="prices">
                    <h4>${{product.price}}</h4>
                    <h5>${{Math.round((product.price * 100) / (100 - product.discountPercentage))}}</h5>
                    <h6>{{product.discountPercentage}}% OFF</h6>
                </div>
                <hr />
                <p class="description">{{product.description}}</p>
            </div>
         </div>
         
         
    </div>
 

</template>

<script>
import products from "@/assets/products.json"
export default {
    head() {
        return {
            title: this.product.title ? this.product.title : this.product.name
        }
    },
    data() {
        return {
            product: {}
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
        
    }
}
</script>

<style>

</style>