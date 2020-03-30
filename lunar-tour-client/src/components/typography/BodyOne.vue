<template>
  <p class="text-sm font-display text-bold text-black">
    {{ text }}
  </p>
</template>
<script>
export default {
  name: "BodyOne",
  props: {
    text: String
  }
};
</script>
