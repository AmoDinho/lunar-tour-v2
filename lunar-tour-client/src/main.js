import Vue from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import { createProvider } from "./vue-apollo";
Vue.config.productionTip = false;
import router from "./router";

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
