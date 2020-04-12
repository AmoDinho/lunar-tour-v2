<template>
  <div class="flex justify-center">
    <!-- start of sign in form --->
    <div class="flex flex-col p-20 shadow-lg rounded w-2/5">
      <HeadingOne class="text-center">
        {{ formState === "signUp" ? "Sign Up" : "Confirm Sign Up" }}
      </HeadingOne>
      <div v-if="formState === 'signUp'" class="flex flex-col ">
        <Input
          placeholder="example@luna.io"
          v-model="form.username"
          class="mb-5"
        />
        <Input
          placeholder="password"
          type="password"
          v-model="form.password"
          class="mb-5"
        />
        <RedBlockButton text="Sign Up" @click.native="signUp" />
      </div>
    </div>
    <!-- End of sign in form --->

    <!-- start of Confirm form --->

    <div v-if="formState === 'confirmSignUp'" class="flex flex-col w-2/5">
      <Input
        placeholder="password"
        type="password"
        v-model="form.authCode"
        class="mb-5"
      />
      <RedBlockButton text="Confirm" @click.native="confirmSignUp" />
    </div>

    <!-- End of Confirm form --->
  </div>
</template>
<script>
import { Auth } from "aws-amplify";
import HeadingOne from "../typography/HeadingOne";
// import BodyOne from "../components/typography/BodyOne";
import Input from "../inputs/Input";
import RedBlockButton from "../buttons/RedBlockButton";
export default {
  name: "SignUp",
  props: ["toggle"],
  data() {
    return {
      formState: "signUp",
      form: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    async signUp() {
      const { username, password } = this.form;
      await Auth.signUp({
        username,
        password
      });
      this.formState = "confirmSignUp";
    },
    async confirmSignUp() {
      const { username, authCode } = this.form;
      await Auth.confirmSignUp(username, authCode);

      this.$router.push("/bookings");
      this.toggle();
    }
  },
  components: {
    HeadingOne,
    // BodyOne,
    Input,
    RedBlockButton
  }
};
</script>
