<template>
  <div>
    <LandingHeader />
    <ApolloQuery
      :query="
        gql => gql`
          query getAllListings {
            listingId
            coverPhoto
            listingName
            listingLocation
            rating
            price
          }
        `
      "
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading">loading...</div>
        <div v-if="error">error...</div>

        <div v-else-if="data">
          <div v-for="listing of data.getAllListings" :key="listing.listingId">
            {{ listing.listingName }}
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import LandingHeader from "../components/headers/LandingHeader.vue";
//import TourCard from "../components/cards/TourCard";
export default {
  name: "Home",
  components: {
    LandingHeader
    //TourCard
  }
};
</script>
