<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/navigation/Nav.vue";
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";
export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      signedIn: false,
    };
  },
  beforeCreate() {
    AmplifyEventBus.$on("authState", (info) => {
      if (info === "signedIn") {
        this.signedIn = true;
        this.$router.push("/bookings");
      }
      if (info === "signedOut") {
        this.$router.push("/auth");
        this.signedIn = false;
      }
    });

    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.signedIn = true;
        console.log(user);
      })
      .catch(() => (this.signedIn = false));
  },
};
</script>
