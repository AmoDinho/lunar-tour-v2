const schema = `



type Listing {
     ID: Int
     coverPhoto: String
     listingName: String
     listingDescription: String
     listingType: String
     listingLocation: String
     listingActivities: String
     specialType: String
     specialAmount: Int
     rating: Int
     guide: Guide
     price: String
     numberOfDays: Int
  
  }
  

  
  type Booking {
      ID: String
      listingID: String
      bookingDate: String
      size: Int
      bookingTotal: String
      customerEmail: String
      customers: [Customer]
  
  }
  
  input BookingInput {
   ID: String
      listingID: String
      bookingDate: String
      size: Int
      bookingTotal: String
      customerEmail: String
      customers: [Customer]
  
  }
  
  type Query {
    getAllListings: [Listing!]!
    getAListing(ID: String!): Listing!
  }
  
  type Mutation {
    makeABooking(input: BookingInput): Boolean
  
  }
  

`

export { schema }
