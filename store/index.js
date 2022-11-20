import products from "../assets/products.json";

export const state = () => ({
  bag: [],
  favorite: [],
  skip: 0,
  limit: 20,
  searchInput: "",
  storeProducts: products.store,
  modal: null,
  user: null,
});

export const getters = {
  totalAmount(state) {
    const prices = state.bag.map((item) => item.price * item.quantity);
    console.log(prices);
    const total = prices.reduce((acc, price) => acc + price, 0);
    console.log(new Intl.NumberFormat(total));
    return total;
  },
};

export const mutations = {
  closeModal(state) {
    state.modal = null    
  },

  showModal(state, modalContent) {
    state.modal = modalContent
    console.log(modalContent);
    console.log(state.modal);
  },
  checkStatus(state, user) {
    if (user) {
      state.user = user;
      // this.$router.push('/profile')
    } else {
      state.user = null;
    }
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
    state.user = null;
  },

  createAccount(state, account) {
    state.user = account;
    console.log(state.user);
    const modalContent = {
      message: "Account created.",
      description: `Account with user email ${account.email} has been created successfully`
    }
    state.modal = modalContent
  },

  googleSignIn(state) {
    const provider = new this.$fireModule.auth.GoogleAuthProvider();
    this.$fire.auth
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        state.user = user;
        this.$router.push("/profile");
        console.log(user);
        // commit('SigninUser', user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
  },

  SigninUser(state, account) {
    state.user = account;
    console.log(state.user);
    const modalContent = {
      message: "Logged in.",
      description: `${account.email} has been logged in successfully`
    }
    state.modal = modalContent
    this.$router.push('/profile')
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
    
    const inBag = state.bag.find((product) => product.id === item.id);
    // console.log(state.modal.description);
  if (inBag) {
      inBag.quantity = parseInt(inBag.quantity) + parseInt(item.quantity);
      const modalContent = {
        message: "Cart item increased",
        description: `Quantity of ${item.name ? item.name : item.title} in cart has been by ${item.quantity}.`
      }
      state.modal = modalContent
    } else {
      state.bag = [...state.bag, item];
      const modalContent = {
        message: "Added to Cart",
        description: `${item.name ? item.name : item.title} has been added to your cart successfully.`
      }
      state.modal = modalContent
    }
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
    await this.$fire.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        commit("createAccount", account);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  },

  async LoginAccount({ commit }, user) {
    // e.preventDefault();
    await this.$fire.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const account = userCredential.user;
        commit("SigninUser", account);
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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
        log("LOGGED OUT");
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
