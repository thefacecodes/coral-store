import products from "../assets/products.json"

    export const state = () => ({
      bag: [],
      favorite: [],
      skip: 0,
      limit: 20,
      storeProducts: products.store
    })

    export const getters = {
      totalAmount(state) {
        const prices = state.bag.map((item) => item.price * item.quantity);
      console.log(prices);
      const total = prices.reduce((acc, price) => acc + price, 0);
      console.log(new Intl.NumberFormat(total));
      return total
      },

    }

    export const mutations = {
        updatePageProducts(state, newproduct) {
            if(state.skip < 20) {
                state.storeProducts = [...products.store, ...newproduct]
            } else {
            state.storeProducts = newproduct
            console.log(state.storeProducts);
            }
        },

        
        productsList(state, newproduct) {
            state.storeProducts = [...products.store, ...newproduct]
            console.log(state.storeProducts);
        },

        increaseSkipandLimit(state, add) {
            state.skip = state.skip + add

        },

        reduceSkipandLimit(state, add) {
            state.skip = state.skip - add

        },

        addToCart(state, item) {
            const inBag = state.bag.find(product => product.id === item.id)
            if(inBag) {
                inBag.quantity ++;
            } else {
               item.quantity = 1
            state.bag = [...state.bag, item]
            }
        },

        removeFromCart(state, item) {
            state.bag = state.bag.filter(product => product.id !== item.id)          
        },

        increaseQuantity(state, cartitem) {
            cartitem.quantity++
            // console.log(item);
            // console.log(item.quantity);
            // const inCart= state.bag.find(cartitem => cartitem.id === item.id)
            //   console.log(inCart.quantity);
            //   inCart.quantity++
            //   console.log(inCart.quantity);

        }
    }

    export const actions = {
        async productsList({state, commit}) {
        fetch(`https://dummyjson.com/products?skip=${state.skip}&limit=${state.limit}`)
        .then(response => response.json())
        .then(data => {
            commit('productsList', data.products)
        })
      },

      nextPageProducts({state, commit}) {
        const add = 20
            commit('increaseSkipandLimit', add)
            fetch(`https://dummyjson.com/products?skip=${state.skip}&limit=${state.limit}`)
            .then(response => response.json())
            .then(data => {
                commit('updatePageProducts', data.products)
            })
      },

      prevPageProducts({state, commit}) {
        const add = 20
            commit('reduceSkipandLimit', add)
            fetch(`https://dummyjson.com/products?skip=${state.skip}&limit=${state.limit}`)
            .then(response => response.json())
            .then(data => {
                commit('updatePageProducts', data.products)
            })
      },

      addToCart({commit}, item) {
        commit('addToCart', item)
    },

    removeFromCart({commit}, item) {
        commit('removeFromCart', item)
    },

    increaseQuantity({state, commit}, item) {
        const cartitem = state.bag.find(product => product.id === item.id)
        // cartitem.quantity++
        commit('increaseQuantity', cartitem)
    }

    }

    export const modules = {
    }
