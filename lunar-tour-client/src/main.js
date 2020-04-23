import Vue from "vue";
import App from "./App.vue";
import { Progress, Tabs, Skeleton } from "ant-design-vue";
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import amplifyConfig from "../amplify.config.js";
import "ant-design-vue/dist/antd.css";
import VueRouter from "vue-router";
import "./assets/css/tailwind.css";
import { createProvider } from "./vue-apollo";
Vue.config.productionTip = false;
import router from "./router";

Amplify.configure(amplifyConfig);
const current = AmplifyModules.Auth.configure();
console.log(amplifyConfig, current);

Vue.use(VueRouter);
Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(Tabs);
Vue.use(Skeleton);

Vue.use(Progress);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
