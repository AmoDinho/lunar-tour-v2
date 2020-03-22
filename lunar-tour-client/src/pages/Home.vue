<template>
  <div>
    <LandingHeader />
    <ApolloQuery :query="require('../graphql/getAllListings.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading">loading...</div>
        <div v-if="error">error...</div>

        <div v-else-if="data" class="grid p-10">
          <div v-for="listing of data.getAllListings" :key="listing.listingId">
            <TourCard
              :listingTitle="listing.listingName"
              :listingLocation="listing.listingLocation"
              :price="listing.price"
              :rating="listing.rating"
              :coverPhoto="listing.coverPhoto"
              class="mt-32"
            />
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import LandingHeader from "../components/headers/LandingHeader.vue";
import TourCard from "../components/cards/TourCard";
export default {
  name: "Home",
  components: {
    LandingHeader,
    TourCard
  }
};
</script>
<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
