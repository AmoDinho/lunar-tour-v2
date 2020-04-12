<template>
  <div>
    <HeadingOne>
      Welcome Back
    </HeadingOne>
    <div>
      <Input placeholder="email" v-model="form.username" />
      <Input placeholder="password" type="password" v-model="form.email" />
      <RedBlockButton text="Sign In" @click.native="signIn" />
    </div>
  </div>
</template>
<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";
import HeadingOne from "../typography/HeadingOne";
import Input from "../inputs/Input";
import RedBlockButton from "../buttons/RedBlockButton";
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    HeadingOne,
    // BodyOne,
    Input,
    RedBlockButton
  },
  methods: {
    async signIn() {
      const { username, password } = this.form;
      await Auth.signIn({
        username,
        password
      });
      AmplifyEventBus.$emit("authState", "signedIn");
      this.$router.push("/bookings");
    }
  }
};
</script>
