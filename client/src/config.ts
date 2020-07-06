// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '5l7sozh12c'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // Auth0 domain
  domain: 'dev-q1xz20vn.us.auth0.com',
  // Auth0 client id
  clientId: '9CaoPCJxWpybpWOVp6bD8oWN5D76wr2d', 
  callbackUrl: 'http://localhost:3000/callback'
}
