<template>
  <div>
    <SignUp :toggle="toggle" v-if="formState === 'signUp'" />
    <SignIn v-if="formState === 'signIn'" />
    <div class="flex justify-center mt-10">
      <p @click="toggle">
        {{ formState === "signUp" ? "Already signed up?" : "Need an account?" }}
      </p>
    </div>
  </div>
</template>
<script>
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";

export default {
  name: "Auth",
  components: {
    SignUp,
    SignIn
  },
  data() {
    return {
      formState: "signUp"
    };
  },
  methods: {
    toggle() {
      this.formState === "signUp"
        ? (this.formState = "signIn")
        : (this.formState = "signUp");
    }
  }
};
</script>
