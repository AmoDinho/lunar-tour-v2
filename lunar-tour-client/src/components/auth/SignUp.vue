<template>
  <div>
    <div class="flex flex-col p-20">
      <HeadingOne>
        {{ formState === "signUp" ? "Sign Up" : "Confirm Sign Up" }}
      </HeadingOne>
      <div v-if="formState === 'signUp'" class="flex flex-col w-3/5">
        <Input placeholder="email" v-model="form.username" />
        <Input placeholder="password" type="password" v-model="form.password" />
        <RedBlockButton text="Sign Up" @click.native="signUp" />
      </div>
    </div>

    <div v-if="formState === 'confirmSignUp'">
      <Input placeholder="password" type="password" v-model="form.authCode" />
      <RedBlockButton text="Confirm" @click.native="confirmSignUp" />
    </div>
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
