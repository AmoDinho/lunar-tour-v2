<template>
  <div>
    <HeadingOne>
      Sign up
    </HeadingOne>
    <div>
      <Input placeholder="email" />
      <Input placeholder="password" type="password" />
      <RedBlockButton text="Sign Up" />
    </div>
  </div>
</template>
<script>
import HeadingOne from "../typography/HeadingOne";
// import BodyOne from "../components/typography/BodyOne";
import Input from "../inputs/Input";
import RedBlockButton from "../buttons/RedBlockButton";
// import RedOutlineButton from "../components/buttons/RedOutlineButton";
export default {
  name: "Auth",
  components: {
    HeadingOne,
    // BodyOne,
    // DateInput,
    Input,
    RedBlockButton
    // RedOutlineButton,
    // RemoveButton,
    // BlueBlockButton,
    // Card
  }
};
</script>
