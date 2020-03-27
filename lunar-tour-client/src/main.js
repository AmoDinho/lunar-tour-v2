import Vue from "vue";
import App from "./App.vue";
import { Progress, Tabs } from "ant-design-vue";

import "ant-design-vue/dist/antd.css";
import VueRouter from "vue-router";
import "./assets/css/tailwind.css";
import { createProvider } from "./vue-apollo";
Vue.config.productionTip = false;
import router from "./router";
Vue.use(VueRouter);
Vue.use(Tabs);
Vue.use(Progress);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
