import { getAllListings, getAListing } from "./query";

export const resolvers = {
  Query: {
    getAllListings: (root, args, context) => getAllListings(args, context),
    getAListing: (root, args, context) => getAListing(args, context)
  }
};
