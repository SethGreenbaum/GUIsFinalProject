import axios from "axios";
import ls from "local-storage";
const clientId = "9h2ih58xm16g4xy7r865z0e8buotm6"
export default {
  getTwitch: function() {
    let token = ls.get('token')
    let value = "Bearer " + token
    let config = {
        headers: {
          "Authorization": value,
          "Client-ID": clientId
        }
      }
    return axios.get("https://api.twitch.tv/helix/streams", config);
  },
  getToken: function() {
    var redirectUri = window.location.href;
    var authUrl =
    "https://id.twitch.tv/oauth2/authorize?client_id=" +
    clientId +
    "&redirect_uri=" +
    redirectUri +
    "&response_type=token&scope=user:read:broadcast";
    window.location.href = authUrl;
  },
  getAuthorization() {
    let returnedAuthorizationToken = window.location.hash.substr(1);
    let authorizationToken =
      returnedAuthorizationToken.substring(
        returnedAuthorizationToken.indexOf("=") + 1,
        returnedAuthorizationToken.indexOf("&")
      );
    console.log(authorizationToken);
    ls.set('token', authorizationToken)
  }
};