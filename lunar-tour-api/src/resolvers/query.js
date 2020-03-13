import * as dynamoDBLib from "../../libs/dynamodb-lib";

export const getAllListings = async (args, context) => {
  const params = {
    TableName: process.env.ListingsDB,
    FilterExpression: "attribute_exists(listingName)"
  };
  console.log("table", params);

  try {
    const result = await dynamoDBLib.call("scan", params);
    console.log("eee", result);
    return result.Items;
    // return result;
  } catch (e) {
    return e.message;
  }
};
