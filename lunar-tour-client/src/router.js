import VueRouter from "vue-router";

import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    component: Home
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
