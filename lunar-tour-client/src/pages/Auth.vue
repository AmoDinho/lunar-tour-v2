<template>
  <div>
    <SignUp :toggle="toggle" v-if="formState === 'signUp'" />
    <SignIn v-if="formState === 'signIn'" />
    <div class="flex justify-center mt-10">
      <BodyOne @click.native="toggle" class="cursor-pointer">
        {{ formState === "signUp" ? "Already signed up?" : "Need an account?" }}
      </BodyOne>
    </div>
  </div>
</template>
<script>
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import BodyOne from "../components/typography/BodyOne";
export default {
  name: "Auth",
  components: {
    SignUp,
    SignIn,
    BodyOne
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
