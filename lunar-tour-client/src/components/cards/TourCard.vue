<template>
  <div class="rounded-px w-card h-card">
    <img :src="coverPhoto" class="w-full h-48 rounded-t-px" />
    <div class="flex flex-col p-2">
      <div class="flex flex-row mt-2 ">
        <p class="font-display text-base">{{ listingTitle }}</p>
        <p class="font-display text-sm text-grey">{{ listingLocation }}</p>
      </div>

      <p class="font-display text-lg mt-8">${{ price }}</p>
      <p class="font-display">{{ rating }}</p>
    </div>
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
