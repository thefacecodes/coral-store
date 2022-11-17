import products from "../assets/products.json";

export const state = () => ({
  bag: [],
  favorite: [],
  skip: 0,
  limit: 20,
  storeProducts: products.store,
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
  checkStatus(state, user) {
    state.user = user
  },

  createAccount(state, account) {
    state.user = account;
    console.log(state.user);
  },

  SigninUser(state, account) {
    state.user = account;
    console.log(state.user);
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

  reduceSkipandLimit(state, add) {
    state.skip = state.skip - add;
  },

  addToCart(state, item) {
    const inBag = state.bag.find((product) => product.id === item.id);
    if (inBag) {
      inBag.quantity++;
    } else {
      state.bag = [...state.bag, item];
    }
  },

  removeFromCart(state, item) {
    state.bag = state.bag.filter((product) => product.id !== item.id);
  },

  decreaseQuantity(state, item) {
    const inBag = state.bag.find((product) => product.id === item.id);
    inBag.quantity--;
  },
};

export const actions = {
  async productsList({ state, commit }) {
    fetch(
      `https://dummyjson.com/products?skip=${state.skip}&limit=${state.limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        commit("productsList", data.products);
      });
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
      });
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
      });
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
    commit("removeFromCart", item);
  },

  increaseQuantity({ state, commit }, item) {
    const cartitem = state.bag.find((product) => product.id === item.id);
    // cartitem.quantity++
    commit("increaseQuantity", cartitem);
  },
};

export const modules = {};
