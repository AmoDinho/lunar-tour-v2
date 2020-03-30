<template>
  <input
    class="
    bg-white 
    rounded-px 
    py-3
    px-16 
    border
    border-grey-light 
    focus:outline-none 
    focus:bg-white"
    type="date"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: "DateInput",
  props: {
    placeholder: String
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
