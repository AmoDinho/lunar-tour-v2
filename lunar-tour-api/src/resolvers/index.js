import { getAllListings } from "./query";

export const resolvers = {
  Query: {
    getAllListings: (root, args, context) => getAllListings(args, context)
  }
};
