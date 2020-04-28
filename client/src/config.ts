// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'ptbn47m9d9'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-flr-3mpv.auth0.com',            // Auth0 domain
  clientId: 'NPw0gwlCUIYizyNaQ2wI06y7aCvAqL8r',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
