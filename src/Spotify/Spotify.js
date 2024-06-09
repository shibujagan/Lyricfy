import axios from 'axios'
const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "448b873384ac4bdf87dddb078de11e14";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private", 'user-read-private',
  'user-read-email']

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};




export default apiClient;