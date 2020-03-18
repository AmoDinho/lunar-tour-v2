import { v1 as uuidv1 } from "uuid";
import stripePackage from "stripe";
import * as dynamoDBLib from "../../libs/dynamodb-lib";
/*
To-Do

- Setup stripe
- Create tickets
-  Setup transactional email


*/
export const makeABooking = async (args, context) => {
  /*
    How to get all the listings?
    
    Get the listing ID
    Query the db for the listing
    get it's price
    
    options? 
    
    := do a scan for a listing
    := get all the listings/ only get their prices and then filter only if the price has the relveant listing ID
    */

  const getPrices = async () => {
    const params = {
      TableName: process.env.ListingsDB,
      KeyConditionExpression: "listingId = :listingId",
      ExpressionAttributeValues: {
        ":listingId": args.listingId
      }
    };
    try {
      const listings = await dynamoDBLib.call("query", params);
      return listings;
    } catch (e) {
      return e;
    }
  };

  const listingObject = await getPrices();
  const bookingCharge = parseInt(listingObject.Items[0].price) * args.size;
  const source = "tok_visa";
  const description = `Charge for booking of listing ${args.listingId}`;
  const stripe = stripePackage(process.env.stripeSecretKey);
  const stripeResult = await stripe.charges.create({
    source,
    bookingCharge,
    description,
    currency: "usd"
  });

  console.log("Stripe result", stripeResult);

  const params = {
    TableName: process.env.BookingsDB,
    Item: {
      bookingId: uuidv1(),
      listingId: args.listingId,
      bookingDate: Date.now(),
      size: args.size,
      bookingTotal: bookingCharge,
      customerEmail: args.customerEmail,
      customers: args.customers,
      createdTimestamp: Date.now()
    }
  };

  try {
    await dynamoDBLib.call("put", params);
    return true;
  } catch (e) {
    return e;
  }
};
