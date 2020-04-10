const amplifyConfig = {
  Auth: {
    region: "us-east-1",
    identityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID,
    userPoolId: process.env.VUE_APP_USERPOOL_ID,
    userPoolWebClientId: process.env.VUE_APP_USERPOOL_CLIENT_ID
  }
};
export default amplifyConfig;
