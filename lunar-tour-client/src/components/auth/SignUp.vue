<template>
  <div>
    <HeadingOne>
      {formState === 'signUp' ? 'Sign Up' : 'Confirm Sign Up'}}
    </HeadingOne>
    <div>
      <Input placeholder="email" />
      <Input placeholder="password" type="password" />
      <RedBlockButton text="Sign Up" />
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
  name: "Auth",
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
  components: {
    HeadingOne,
    // BodyOne,
    Input,
    RedBlockButton
  },
  methods: {
    signUp: async () => {
      const { username, password } = this.form;
      await Auth.signUp({
        username,
        password
      });
      this.formState = "confirmSignUp";
    },
    confirmSignUp: async () => {
      const { username, authCode } = this.form;
      await Auth.confirmSignUp(username, authCode);
      this.toggle();
      this.$router.push("/bookings");
    }
  }
};
</script>
