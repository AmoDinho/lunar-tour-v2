<template>
  <p class="text-sm font-body">
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
