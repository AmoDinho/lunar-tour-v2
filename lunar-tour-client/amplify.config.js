const amplifyConfig = {
  Auth: {
    region: "us-east-1",
    userPoolId: process.env.USERPOOL_ID,
    userPoolWebClientId: process.env.USERPOOL_CLIENT_ID
  }
};
