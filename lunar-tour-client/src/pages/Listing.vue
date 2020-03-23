<template>
  <div>
    <div class="text-red">{{ listing.getAListing.listingName }}</div>
  </div>
</template>
<script>
// import GET_A_LISTING from "../graphql/getAListing.gql";
import gql from "graphql-tag";

export default {
  name: "Listing",
  data() {
    return {
      listing: {}
    };
  },
  apollo: {
    listing: {
      query: gql`
        query GetAListing($listingId: String) {
          getAListing(listingId: $listingId) {
            coverPhoto
            listingId
            listingName
            specialType
          }
        }
      `,
      variables: {
        listingId: "6fb8fcbd-7ed3-45b6-b2ba-5bb99d7024e2"
      }
    }
  }
};

//   <ApolloQuery
//       :query="require('')"
//       :variables="{ listingId: $route.query.id }"
//     >
//       <template v-slot="{ result: { loading, error, data } }">
//         <!-- Loading -->
//         <div v-if="loading" class="loading apollo text-red">Loading...</div>

//         <!-- Error -->
//         <div v-else-if="error" class="error apollo text-red">
//           An error occurred
//         </div>

//         <!-- Result -->
//         <div v-else-if="data" class="result apollo text-red">
//           {{ data.getAListing.listingName }}
//         </div>
//       </template>
//     </ApolloQuery>
</script>
