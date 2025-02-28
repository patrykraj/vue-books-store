import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    books: [],
    cart: [],
    loading: false,
  },

  actions,
  mutations,
});

export default store;
