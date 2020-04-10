import Vue from "vue";
import App from "./App.vue";
import { Progress, Tabs } from "ant-design-vue";
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import amplifyConfig from "../amplify.config";
import "ant-design-vue/dist/antd.css";
import VueRouter from "vue-router";
import "./assets/css/tailwind.css";
import { createProvider } from "./vue-apollo";
Vue.config.productionTip = false;
import router from "./router";

Amplify.configure(amplifyConfig);
Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(VueRouter);
Vue.use(Tabs);
Vue.use(Progress);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
