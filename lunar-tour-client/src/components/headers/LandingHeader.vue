<template>
  <div class="image text-center bg-transparent " :style="urlProps">
    <h1 class="text-white font-display text-5xl pt-44">
      Book Vacations to Different Lunar Destinations
    </h1>
  </div>
</template>
<script>
export default {
  name: "Landing Header",
  props: {
    imgURL: String
  },
  computed: {
    urlProps() {
      return "--img-url:" + `url(${this.imgURL})`;
    }
  }
};
</script>
<style>
.image {
  background: var(--img-url) no-repeat center center;
  background-size: cover;
  height: 570px;
  margin-top: -85px;
}
</style>
