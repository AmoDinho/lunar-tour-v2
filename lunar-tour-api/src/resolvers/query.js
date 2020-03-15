import * as dynamoDBLib from "../../libs/dynamodb-lib";

export const getAllListings = async (args, context) => {
  const params = {
    TableName: process.env.ListingsDB,
    ConsistentRead: "false"
  };
  console.log("table", params);

  try {
    const result = await dynamoDBLib.call("scan", params);
    console.log("eee", result.Items.map(i => i.listingName));
    return result.Items.map(i => ({
      ID: i.listingId,
      coverPhoto: i.coverPhoto,
      listingName: i.listingName,
      listingDescription: i.listingDescription,
      listingType: i.listingType,
      listingLocation: i.listingLocation,
      listingActivities: i.listingActivities,
      specialType: i.specialType,
      specialAmount: i.specialAmount,
      rating: i.rating,
      guide: i.guide,
      price: i.price,
      numberOfDays: i.numberOfDays
    }))



    // return result;
  } catch (e) {
    return e.message;
  }
};
