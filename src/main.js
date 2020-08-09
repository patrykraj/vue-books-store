import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./App.vue";
import Books from "./components/Books";
import Homepage from "./components/Homepage";
import store from "./store";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/books", component: Books },
    { path: "/", component: Homepage },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
