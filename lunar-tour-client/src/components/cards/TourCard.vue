<template>
  <div>
    <h1>{{ listingTitle }}</h1>
    <h1>{{ listingLocation }}</h1>
    <h1>{{ price }}</h1>
    <h1>{{ rating }}</h1>
  </div>
</template>
<script>
export default {
  name: "Tour Card",
  props: {
    listingTitle: String,
    listingLocation: String,
    price: String,
    rating: String
  }
};
</script>
