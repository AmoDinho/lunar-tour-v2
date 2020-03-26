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
        <div v-else-if="data" class="result apollo">
          <LandingHeader :imgURL="data.getAListing.coverPhoto" />

          <div class="grid p-5 mt-10">
            <div class="mr-16">
              <h1 class="font-display  font-semibold text-3xl text-black">
                {{ data.getAListing.listingName }}
              </h1>
              <h1 class="font-display text-xl text-black mt-4 mb-8">
                {{ data.getAListing.listingLocation }}
              </h1>
              <p class="font-display text-left text-black ">
                {{ data.getAListing.listingDescription }}
              </p>

              <h3 class="font-display text-2xl font-bold text-black mt-10">
                Trip ammenities
              </h3>

              <div
                class="flex flex-row p-3"
                v-for="types in data.getAListing.listingType"
                :key="types"
              >
                <img src="../assets/trip_type.svg" />
                <p class="font-display ml-2">{{ types.name }}</p>
              </div>

              <h3 class="font-display text-2xl font-bold text-black  mt-10">
                Activites
              </h3>
              <div
                class="flex flex-row p-3"
                v-for="activies in data.getAListing.listingActivities"
                :key="activies"
              >
                <img src="../assets/trip_activity.svg" />
                <p class="font-display ml-2">{{ activies.name }}</p>
              </div>
            </div>
            <div class="">
              <h1 class="font-display font-bold text-xl text-black">
                $ {{ data.getAListing.price }}
              </h1>

              <button>Book</button>
              <h1 class="font-display text-xl text-black">
                {{ data.getAListing.guide.Name }}
              </h1>
              <p class="font-display  text-black">
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

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
