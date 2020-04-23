<template>
  <div class="flex justify-center">
    <div class="flex flex-col p-20 shadow-lg rounded w-2/5">
      <div v-if="errors" class="text-red">
        {{ errors }}
      </div>
      <HeadingOne class="text-center">
        Welcome Back
      </HeadingOne>
      <div class="flex flex-col ">
        <Input placeholder="email" v-model="form.username" class="mb-5" />
        <Input
          placeholder="password"
          type="password"
          v-model="form.email"
          class="mb-5"
        />
        <RedBlockButton text="Sign In" @click.native="signIn" />
      </div>
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
        password: "",
      },
      errors: "",
    };
  },
  components: {
    HeadingOne,
    // BodyOne,
    Input,
    RedBlockButton,
  },
  methods: {
    async signIn() {
      const { username, password } = this.form;

      console.log("pa", password);
      try {
        await Auth.signIn({ username, password })
          .then((user) => console.log("rrr", user))
          .catch((e) => console.log("ccc", e));

        AmplifyEventBus.$emit("authState", "signedIn");
        this.$router.push("/bookings");
      } catch (e) {
        this.errors = e.message;
      }
    },
  },
};
</script>
