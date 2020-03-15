const schema = `

type ListingType {
  name: String
}


type Listing {
     ID: Int
     coverPhoto: String
     listingName: String
     listingDescription: String
     listingType: [ListingType]
     listingLocation: String
     listingActivities: String
     specialType: String
     specialAmount: Int
     rating: Int
     guide: String
     price: String
     numberOfDays: Int
  
  }
  

type Guide {
  Name: String
  Bio: String
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
  type Customer {
    name: String
    Surname: String
     country: String
    passportNumber: String
    physioScore: String
  }

  input InputCustomer {
    name: String
    Surname: String
     country: String
    passportNumber: String
    physioScore: String
  }
  input BookingInput {
   ID: String
      listingID: String
      bookingDate: String
      size: Int
      bookingTotal: String
      customerEmail: String
      customers: InputCustomer
  
  }
  
  type Query {
    getAllListings: [Listing]
    getAListing(ID: String!): Listing!
  }
  
  type Mutation {
    makeABooking(input: BookingInput): Boolean
  
  }
  

`;

export { schema };
