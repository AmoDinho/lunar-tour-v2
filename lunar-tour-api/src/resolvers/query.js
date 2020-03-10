import * as dynamoDBLib from "../../libs/dynamodb-lib";

export const getAllListings = async (args, context) => {
  const params = {
    TableName: process.env.ListingsDB
  };
  console.log("table", params);

  try {
    const listings = await dynamoDBLib.call("scan", params);
    console.log("eee", listings);

    return listings.Item;
  } catch (e) {
    return e.message;
  }
};
