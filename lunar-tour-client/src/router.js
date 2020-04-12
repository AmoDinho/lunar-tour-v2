import Vue from "vue";
import VueRouter from "vue-router";
import Listing from "./pages/Listing";
import Home from "./pages/Home";
import Index from "./pages/booking/Index";
import ViewBookings from "./pages/booking/ViewBookings";
import Auth from "./pages/Auth";
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
  },
  {
    path: "/bookings",
    component: ViewBookings,
    meta: { requiresAuth: true }
  },
  {
    path: "/auth",
    component: Auth
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    console.log(user);
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
      .then(data => {
        if (data && data.signInUserSession) {
          user = data;
        }
        next();
      })
      .catch(e => {
        console.log(e);
        next({
          path: "/auth"
        });
      });
  }
  next();
});
export default router;
