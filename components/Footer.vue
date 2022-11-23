<template>
  <footer>
    <div class="links">
        <ul>
            <h6>Shop by Category</h6>
            <li><nuxt-link to="/">Skincare</nuxt-link></li>
            <li><nuxt-link to="/">Personal Care</nuxt-link></li>
            <li><nuxt-link to="/">handbags</nuxt-link></li>
            <li><nuxt-link to="/">Apparels</nuxt-link></li>
            <li><nuxt-link to="/">Watches</nuxt-link></li>
            <li><nuxt-link to="/">Eye Wear</nuxt-link></li>
            <li><nuxt-link to="/">Jewellery</nuxt-link></li>
        </ul>
        <ul>
            <h6>About</h6>
            <li><nuxt-link to="/">Contact Us</nuxt-link></li>
            <li><nuxt-link to="/about">About Us</nuxt-link></li>
            <li><nuxt-link to="/">Careers</nuxt-link></li>
            <li><nuxt-link to="/">Press</nuxt-link></li>
        </ul>
        <ul>
            <h6>Policy</h6>
            <li><nuxt-link to="/">Return policy</nuxt-link></li>
            <li><nuxt-link to="/">Terms of Use</nuxt-link></li>
            <li><nuxt-link to="/">Sitemap</nuxt-link></li>
            <li><nuxt-link to="/">Security</nuxt-link></li>
            <li><nuxt-link to="/">Privacy</nuxt-link></li>
            <li><nuxt-link to="/">EPR Compliance</nuxt-link></li>
        </ul>
    </div>
    <div class="socials">
        <section>
            <img src="~/assets/images/facebook.png" alt=""> 
            <img src="~/assets/images/ig.png" alt=""> 
            <img src="~/assets/images/twitter.png" alt=""> 
          <img src="~/assets/images/youtube.png" alt="">  
        </section>
        
        <p class="location"><img src="~/assets/images/location.png" alt=""> {{location ? location : "United States"}}</p>
        <p>&copy; 2022 | Cora Leviene All Rights Reserved <br /> - Powered by The Face</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      location: ""
    }
  },
  created() {
    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_ZK89x7V16ZmKS0A0Kz41qO0eRPhv7')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const location = `${data.location.region}, ${data.location.country}`
      this.location = location
    })
    .catch(error => console.log(error))
  }

}
</script>

<style>

</style>