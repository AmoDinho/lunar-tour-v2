<template>
  <div>
    <ApolloQuery
      :query="require('../graphql/getAListing.gql')"
      :variables="{ listingId: this.$route.params.id.toString() }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo text-red">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo text-red">
          An error occurred {{ error.message }}
        </div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo text-red">
          <LandingHeader :imgURL="data.getAListing.coverPhoto" />

          <div class="grid grid-col-1">
            <div class="">
              <h1 class="font-family text-xl text-black">
                {{ data.getAListing.listingName }}
              </h1>
              <h1 class="font-family text-xl text-black">
                {{ data.getAListing.listingLocation }}
              </h1>
              <p class="font-family  text-black">
                {{ data.getAListing.listingDescription }}
              </p>

              <h3>Trip ammenities</h3>
              <ul>
                <li v-for="types in data.getAListing.listingType" :key="types">
                  {{ types.name }}
                </li>
              </ul>

              <h3>Activites</h3>
              <ul>
                <li
                  v-for="activies in data.getAListing.listingActivities"
                  :key="activies"
                >
                  {{ activies.name }}
                </li>
              </ul>
            </div>
            <div class="">
              <h1 class="font-family text-xl text-black">
                {{ data.getAListing.price }}
              </h1>

              <button>Book</button>
              <h1 class="font-family text-xl text-black">
                {{ data.getAListing.guide.Name }}
              </h1>
              <p class="font-family  text-black">
                {{ data.getAListing.guide.Bio }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import LandingHeader from "../components/headers/LandingHeader";
export default {
  name: "Listing",
  components: {
    LandingHeader
  }
};
</script>
