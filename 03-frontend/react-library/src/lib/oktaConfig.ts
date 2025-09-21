export const oktaConfig = {
    clientId: '0oadyh2pwmmgFxbZI5d7',
    issuer: 'https://dev-71386004.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}