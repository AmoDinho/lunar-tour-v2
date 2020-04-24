import { getAllListings } from "../src/resolvers/query";
describe("All Listings", () => {
  test("brings back all listings", async () => {
    const args = "args";
    const context = "context";

    const response = await getAllListings(args, context);
    console.log(response);
  });
});
