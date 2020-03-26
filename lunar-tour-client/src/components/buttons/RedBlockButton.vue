<template>
  <button class="bg-red-lightest text-red-darkest">{{ text }}</button>
</template>
<script>
export default {
  name: "RedBlockButton",
  props: {
    text: String
  }
};
</script>
