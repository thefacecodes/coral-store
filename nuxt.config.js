export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Coral Store - The Face',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        // src:  "https://unpkg.com/vue-paypal-checkout@2.0.0/dist/vue-paypal-checkout.min.js"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/paypal.js', ssr: false }
  ],

  tailwindcss: {   
    exposeConfig: true
    },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    display: "swap",
    families: {
      'Inter': [300, 400, 600, 700, 800],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCcBIPvUheFOtwI_VjSJoUtGhui4J7gfpQ",
          authDomain: "coral-store.firebaseapp.com",
          projectId: "coral-store",
          storageBucket: "coral-store.appspot.com",
          messagingSenderId: "854240236214",
          appId: "1:854240236214:web:d29ed886fac0a483c48c17",
          measurementId: "G-66EX19JZQK"
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true,
          
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
