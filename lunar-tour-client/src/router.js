import VueRouter from "vue-router";
import Listing from "./pages/Listing";
import Home from "./pages/Home";
import Index from "./pages/booking/Index";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/listing/:id",
    component: Listing
  },
  {
    path: "/booking/:id",
    component: Index
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
