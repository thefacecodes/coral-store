import products from "../assets/products.json";

export const state = () => ({
  bag: [],
  wishlist: [],
  details: null,
  skip: 0,
  limit: 20,
  searchInput: "",
  totalAmount: 0,
  discount: 0,
  storeProducts: products.store,
  modal: null,
  user: null,
});

export const getters = {
  totalAmount(state) {
    const prices = state.bag.map((item) => item.price * item.quantity);
    console.log(prices);
    const total = prices.reduce((acc, price) => acc + price, 0);
    // state.totalAmount = total
    // dispatch('totalPrice', total)
    console.log(new Intl.NumberFormat(total));
    return total;
  },

};

export const mutations = {
  closeModal(state) {
    state.modal = null    
  },

  totalPrice(state, total) {
    state.totalAmount = total.toFixed(2)
    console.log(state.totalAmount);
  },

  saveDetails(state, details) {
    if(details.fullname && details.street && details.phoneNumber && details.pin && details.state && details.city) {
    state.details = details
    } else {
      const modalContent = {
        message: "Empty field(s).",
        description: "Please fill the input fields"
      }
      state.modal = modalContent
    }

  },

  applyCoupon(state, coupon) {
    console.log(coupon);
    console.log(products.coupons);
    if(coupon) {
      const valid = products.coupons.find(coup => coup.code === coupon)
          console.log(valid);
          if(valid) {
            console.log("Now, Lets go");
            switch(true) {
               case(valid.type === "percentage") :
               state.discount = state.totalAmount * (valid.discount / 100)
               var modalContent = {
                message: `${valid.discount}% discount coupon code "${coupon}" applied`,
                description: `${valid.discount}% discount has been deducted from your cart total.`
              }
              state.modal = modalContent
              break;

              case(valid.type === "flat") :
              state.discount = valid.discount
              var modalContent = {
               message: `Flat $${valid.discount} discount coupon code "${coupon}" applied`,
               description: `$${valid.discount} has been deducted from your total.`
             }
             state.modal = modalContent
            }
             
          } else {
            const modalContent = {
              message: "Invalid Coupon Code",
              description: `Coupon code "${coupon}" is invalid.`
            }
            state.modal = modalContent
          }
    } else {
      const modalContent = {
        message: "No Coupon",
        description: "Please input your coupon code."
      }
      state.modal = modalContent
    }
    
  },

  addToWishlist(state, product) {
    const already = state.wishlist.find(item => item.id === product.id)
    state.bag = state.bag.filter((item) => item.id !== product.id);

    if(already) {
      const modalContent = {
        message: "Already on Wishlist.",
        description: `${already.name ? already.name : already.title} already on wishlist.`
      }
      state.modal = modalContent
    } else {
        state.wishlist = [...state.wishlist, product]
        const modalContent = {
          message: "Added to Wishlist.",
          description: `${product.name ? product.name : product.title} has been added to wishlist.`
        }
        state.modal = modalContent
    }
 
  },

  removeFromWishlist(state, product) {
    state.wishlist = state.wishlist.filter(item => item.id !== product.id)
    const modalContent = {
      message: "Removed from Wishlist.",
      description: `${product.name ? product.name : product.title} has been removed from wishlist.`
    }
    state.modal = modalContent
  },

  showModal(state, modalContent) {
    state.modal = modalContent
    console.log(modalContent);
    console.log(state.modal);
  },

  checkStatus(state) {
    this.$fire.auth.onAuthStateChanged(user => {
      if(user) {
        state.user = user
      } else {
        state.user = null
      }
      console.log(user);
      console.log(user.email);
    })
     
  },

  searchInput(state, e) {
    const input = e.target.value
    state.searchInput = input
    this.$router.push("/store");
  },

  clearSearchInput(state) {
    state.searchInput = ""
  },

  searchProduct(state, data) {
    state.storeProducts = data.products
  },

  SignOut(state, auth) {
    this.$fire.auth.signOut()
      .then((response) => {
        console.log(response);
        // state.user = response
        const modalContent = {
          message: "Logged Out.",
          description: "Account logged out successfully"
        }
        state.modal = modalContent
        console.log("LOGGED OUT")
        this.$router.push("/signin")
      })
      .catch((error) => {
        console.log(error);
        const modalContent = {
          message: "An error occured",
          description: `${error.message}`
        }
        state.modal = modalContent
      });
  },

  createAccountSuccess(state, account) {
    state.user = account;
    console.log(state.user);
    const modalContent = {
      message: "Account created.",
      description: `Account with user email ${account.email} has been created successfully`
    }
    state.modal = modalContent
  },

  createAccountFailed(state, error) {
    const modalContent = {
      message: `Error ${error.code}`,
      description: `${error.message}`
    }
    state.modal = modalContent
  },

  googleSignIn(state) {
    const provider = new this.$fireModule.auth.GoogleAuthProvider();
    this.$fire.auth
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = this.$fireModule.auth.GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        console.log(result);
        const user = result.user;
        state.user = user;
        this.$router.push('/profile')
        const modalContent = {
          message: "Authorized",
          description: `${user.email}'s Google sign-in authorization successful.`
        }
        state.modal = modalContent
        console.log(user);
        // commit('SigninUser', user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // state.user = null
        // const credential = this.$fireModule.auth.GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        const modalContent = {
          message: `Error ${errorCode}`,
          description: `${errorMessage}`
        }
        state.modal = modalContent
        // ...
      });
  },

  SigninSuccess(state, account) {
    state.user = account;
    console.log(state.user);
    this.$router.push('/profile')
    const modalContent = {
      message: "Logged in.",
      description: `${account.email} has been logged in successfully`
    }
    state.modal = modalContent
  },

  SigninFailed(state, error) {
    const modalContent = {
      message: `Error ${error.code}`,
      description: `${error.message}`
    }
    state.modal = modalContent
  },

  emptyInput(state) {
    const modalContent = {
      message: "Empty field(s).",
      description: "Please fill the input fields"
    }
    state.modal = modalContent
  },
  

  updatePageProducts(state, newproduct) {
    if (state.skip < 20) {
      state.storeProducts = [...products.store, ...newproduct];
    } else {
      state.storeProducts = newproduct;
      console.log(state.storeProducts);
    }
  },

  productsList(state, newproduct) {
    state.storeProducts = [...products.store, ...newproduct];
    console.log(state.storeProducts);
  },

  increaseSkipandLimit(state, add) {
    state.skip = state.skip + add;
  },

  increaseQuantity(state, item) {
    const inBag = state.bag.find((product) => product.id === item.id);
    inBag.quantity++;
    const modalContent = {
      message: "Cart item increased.",
      description: `Quantity of ${item.name ? item.name : item.title} in cart has been increased by 1`
    }
    state.modal = modalContent
  },

  reduceSkipandLimit(state, add) {
    state.skip = state.skip - add;
  },

  addToCart(state, item) {
    item.quantity ? item.quantity : item.quantity = 1

    state.wishlist = state.wishlist.filter(product=> product.id !== item.id)
  

    const inBag = state.bag.find((product) => product.id === item.id);
    // console.log(state.modal.description);
  if (inBag) {
    console.log(inBag.quantity);
    console.log(item.quantity);
      inBag.quantity = parseInt(inBag.quantity) + parseInt(item.quantity);
      const modalContent = {
        message: "Cart item increased",
        description: `Quantity of ${item.name ? item.name : item.title} in cart has been increased by ${item.quantity}.`
      }
      state.modal = modalContent
    } else {
      state.bag = [...state.bag, item];
      const modalContent = {
        message: "Added to Cart",
        description: `${item.quantity} x ${item.name ? item.name : item.title} has been added to your cart successfully.`
      }
      state.modal = modalContent
    }
    // commit('removeFromWishlist', item)
   },

  removeFromCart(state, item) {
    state.bag = state.bag.filter((product) => product.id !== item.id);
    const modalContent = {
      message: "Removed from Cart",
      description: `${item.name ? item.name : item.title} has been removed from your cart successfully.`
    }
    state.modal = modalContent
  },

  decreaseQuantity(state, item) {
    const inBag = state.bag.find((product) => product.id === item.id);
    inBag.quantity--;
    const modalContent = {
      message: "Cart item reduced.",
      description: `Quantity of ${item.name ? item.name : item.title} in cart has been reduced by 1`
    }
    state.modal = modalContent
  },
};

export const actions = {
  async productsList({ state, commit }) {
    await fetch(
      `https://dummyjson.com/products?skip=${state.skip}&limit=${state.limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        commit("productsList", data.products);
      })
      .catch(error => console.log(error))
  },

  totalAmount({commit}, total) {
    commit("totalAmount", total)
  },

  nextPageProducts({ state, commit }) {
    const add = 20;
    commit("increaseSkipandLimit", add);
    fetch(
      `https://dummyjson.com/products?skip=${state.skip}&limit=${state.limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        commit("updatePageProducts", data.products);
      })
      .catch(error => console.log(error))
  },

  prevPageProducts({ state, commit }) {
    const add = 20;
    commit("reduceSkipandLimit", add);
    fetch(
      `https://dummyjson.com/products?skip=${state.skip}&limit=${state.limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        commit("updatePageProducts", data.products);
      })
      .catch(error => console.log(error))
  },

  async searchProduct({state, commit}) {
    await fetch(`https://dummyjson.com/products/search?q=${state.searchInput}`)
    .then(response => response.json())
    .then(data => commit('searchProduct', data))
    .catch(error => console.log(error))
    commit('clearSearchInput')
    .catch(error => console.log(error))
  },

  async createAccount({ commit }, user) {
    if(user.email && user.password) {
        await this.$fire.auth
              .createUserWithEmailAndPassword(user.email, user.password)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                commit("createAccountSuccess", user);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                commit("createAccountFailed", error)
                console.log(errorMessage);
                // ..
              });
    } else {
      commit('emptyInput')
    }
    
  },

  async LoginAccount({ commit }, user) {
    // e.preventDefault();
    if(user.email && user.password) {
        await this.$fire.auth
          .signInWithEmailAndPassword(user.email, user.password)
          .then((userCredential) => {
            // Signed in
            const account = userCredential.user;
            commit("SigninSuccess", account);
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            commit("SigninFailed", error)
          });
    } else {
      commit('emptyInput')
    }

  },

  removeFromCart({ commit }, item) {
    const modalContent = {
      message: "Removed from Cart",
      description: `${item.name ? item.name : item.title} has been removed from your cart successfully.`
    }
    commit("showModal", modalContent)
    commit("removeFromCart", item);
  },

  SignOut({ commit }) {
    this.$fire.auth
      .signOut()
      .then(() => {
        console.log("LOGGED OUT");
      })
      .catch((error) => {
        console.log(error);
      });
  },

  increaseQuantity({ state, commit }, item) {
    const cartitem = state.bag.find((product) => product.id === item.id);
    // cartitem.quantity++
    // const modalContent = {
    //   show: true,
    //   message: "Cart item Quantity increased",
    //   description: `Quantity of ${item.name ? item.name : item.title} in your cart has been increased.`
    // }
    // commit("showModal", modalContent)
    commit("increaseQuantity", cartitem);
  },
};

export const modules = {};
