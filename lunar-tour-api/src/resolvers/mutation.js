import { v1 as uuidv1 } from "uuid"
import * as dynamoDBLib from "../../libs/dynamodb-lib";

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


    const params = {
        TableName: process.env.BookingsDB,
        Item: {
            bookingId: uuidv1(),
            listingId: "a114dded-ddef-4052-a106-bb18b94e6b51",
            bookingDate: Date.now(),
            size: args.size,
            bookingTotal: 33 * args.size,
            customerEmail: args.customerEmail,
            customers: args.customers
        }

    }

    try {
        await dynamoDBLib.call("put", params)
        return true
    } catch (e) {
        return e
    }

}