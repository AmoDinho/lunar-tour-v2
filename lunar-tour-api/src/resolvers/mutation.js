import { v1 as uuidv1 } from "uuid"
import * as dynamoDBLib from "../../libs/dynamodb-lib";

export const makeABooking = async (args, context) => {

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