import { getAllListings, getAListing } from "../src/resolvers/query";
describe("All Listings", () => {
  test("brings back all listings", async () => {
    const args = "args";
    const context = "context";

    const response = await getAllListings(args, context);
    console.log(response);
  });

  test("brings a listing", async () => {
    const args = { listingId: "a114dded-ddef-4052-a106-bb18b94e6b51" };
    const context = "context";

    const response = await getAListing(args, context);
    console.log(response);
  });
});
