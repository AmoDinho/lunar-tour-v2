import Vue from "vue";
import App from "./App.vue";
import Progress from "ant-design-vue/lib/progress";
import Tabs from "ant-design-vue/lib/tabs";
import "ant-design-vue/dist/antd.css";

import VueRouter from "vue-router";
import "./assets/css/tailwind.css";
import { createProvider } from "./vue-apollo";
Vue.config.productionTip = false;
import router from "./router";
Vue.use(VueRouter);

Vue.component(Tabs);
Vue.component(Progress);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
