import VueRouter from "vue-router";
import Listing from "./pages/Listing";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/listing",
    component: Listing
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
