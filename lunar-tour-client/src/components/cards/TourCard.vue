<template>
  <div class=" rounded-lg w-2/5 h-64">
    <img :src="coverPhoto" class="w-1/2" />
    <div class="flex flex-row">
      <p>{{ listingTitle }}</p>
      <p>{{ listingLocation }}</p>
    </div>

    <p>{{ price }}</p>
    <p>{{ rating }}</p>
  </div>
</template>
<script>
export default {
  name: "Tour Card",
  props: {
    listingTitle: String,
    listingLocation: String,
    price: String,
    rating: String,
    coverPhoto: String
  }
};
</script>
