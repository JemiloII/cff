const defer = require('config/defer').deferConfig;

module.exports = {
  certPath: 'C:\\Certbot\\live\\nitro.shibiko.io',
  clientUrl: "https://nitro.shibiko.io",
  serverUrl: "https://nitro.shibiko.io:1337",

  client: {
    clientUrl: defer(function () {
      return this.clientUrl;
    }),
    serverUrl: defer(function () {
      return this.serverUrl;
    })
  }
};
