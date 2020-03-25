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
          {{ data.getAListing.listingName }}
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
export default {
  name: "Listing"
};
</script>
