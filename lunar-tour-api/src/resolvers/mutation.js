import uuid from "uuid"
import * as dynamoDBLib from "../../libs/dynamodb-lib";

export const makeABooking = async (args, context) => {
    const params = {
        TableName: process.env.BookingsDB,
        Item: {
            bookingsId: uuid.v1(),
            listingId: "a114dded-ddef-4052-a106-bb18b94e6b51",
            bookingDate: Date.now(),
            size: args.size,
            bookingTotal: 33 * args.size,
            customerEmail: args.customerEmail,
            customers: [{
                name: args.name,
                Surname: args.Surname,
                country: args.country,
                passportNumber: args.passportNumber,
                physioScore: args.physioScore
            }]
        }

    }

    try {
        await dynamoDBLib.call("put", params)
        return true
    } catch (e) {
        return e
    }

}